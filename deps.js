const os = require('os')

const arch = os.arch()
const is_arm = arch === 'arm' || arch === 'arm64';
const platform = os.platform() + (is_arm ? '-arm' : '')

switch (platform) {
  case 'linux':
    require('fuse-shared-library-linux/lib')
    break
  case 'darwin':
    require('fuse-shared-library-darwin/lib')
    break
  case 'darwin-arm':
    console.log('/usr/local/lib/libfuse.dylib');
    break
  case 'linux-arm':
    require('fuse-shared-library-linux-arm/lib')
    break
  default:
    throw new Error(`fuse-shared-library is not currently supported on: ${platform}`)
}
