const { spawn } = require('node:child_process');
const net = require('node:net');
const path = require('node:path');

const esbuildBin = path.join(__dirname, '..', 'node_modules', 'esbuild', 'bin', 'esbuild');

function isPortFree(port) {
  return new Promise((resolve) => {
    const server = net.createServer();

    server.once('error', () => resolve(false));
    server.once('listening', () => {
      server.close(() => resolve(true));
    });

    server.listen(port, '127.0.0.1');
  });
}

async function findAvailablePort(startPort = 3000, endPort = 3010) {
  for (let port = startPort; port <= endPort; port += 1) {
    if (await isPortFree(port)) {
      return port;
    }
  }

  throw new Error(`Nenhuma porta livre encontrada entre ${startPort} e ${endPort}.`);
}

function openBrowser(url) {
  if (process.env.NO_OPEN_BROWSER) return;

  if (process.platform === 'win32') {
    spawn('cmd', ['/c', 'start', '', url], { detached: true, stdio: 'ignore' }).unref();
    return;
  }

  if (process.platform === 'darwin') {
    spawn('open', [url], { detached: true, stdio: 'ignore' }).unref();
    return;
  }

  spawn('xdg-open', [url], { detached: true, stdio: 'ignore' }).unref();
}

async function start() {
  const port = await findAvailablePort();
  const url = `http://localhost:${port}`;

  console.log(`Servidor iniciado em ${url}`);

  const esbuild = spawn(
    process.execPath,
    [
      esbuildBin,
      './src/index.js',
      '--bundle',
      '--outfile=dist/bundle.js',
      '--loader:.js=jsx',
      '--minify',
      '--servedir=dist',
      '--watch=forever',
      `--serve=localhost:${port}`,
    ],
    { stdio: 'inherit' }
  );

  setTimeout(() => openBrowser(url), 800);

  esbuild.on('exit', (code) => {
    process.exit(code ?? 0);
  });
}

start().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
