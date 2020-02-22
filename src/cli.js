import download from '../lib/download'
import splash from '../lib/splash'

export function cli(args) {
  let repo = args.slice(2)
  if (repo.length < 1) splash()
  else {
    for (var i = 0; i < repo.length; i++) {
      download(repo[i])
    }
  }
}
