import download from 'download-file'
import axios from 'axios'
import chalk from 'chalk'
import file from '../lib/file'

export default function dwl(repo){
  axios.get("https://api.github.com/repos/"+repo+"/readme").then(res=>{
    let readme = res.data.download_url
    let splitRepo = repo.split('/')
    // let readme = "https://raw.githubusercontent.com/"+repo+"/master/README.md"
    download(readme, {directory:splitRepo[0],filename:splitRepo[1]+".html"}, function(err){
      if (err) throw err
      console.log("Readme "+repo+" downloaded")
      setTimeout(function(){
        file.readWriteSync(splitRepo[0]+"/"+splitRepo[1]+".html")
      },500)
    })
  }).catch(err=>{
    console.log(chalk.yellow("Error "+repo+": "+err.response.data.message))
  })
}
