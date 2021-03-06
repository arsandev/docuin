import fs from 'fs'
import marked from 'marked'

export default {
  readWriteSync(file) {
    var data = fs.readFileSync(file, 'utf-8')
    var newValue = marked(data)
    var newVal = "<style>@import url(http://fonts.googleapis.com/css?family=Lato);html{font-size:12px}@media screen and (min-width:32rem) and (max-width:48rem){html{font-size:15px}}@media screen and (min-width:48rem){html{font-size:16px}}body{line-height:1.85}p{font-size:1rem;margin-bottom:1.3rem}h1,h3{margin:1.414rem 0 .5rem;font-weight:inherit;line-height:1.42}h1{margin-top:0;font-size:3.998rem}h3{font-size:1.999rem}.list--unstyled{list-style-type:none}body{color:#444;font-family:Lato,Helvetica,sans;margin:0}footer{background-color:#fafafa;padding:6rem 0;text-align:center}a,a:visited{color:#3d9970;text-decoration:none}a:active,a:focus,a:hover{opacity:.9}.hero{background-color:#fafafa;padding:3rem 1rem;text-align:center}.themes-list{margin:0;padding:0;text-align:center}.themes-list-item{padding:2rem 0}.themes-list-item:active,.themes-list-item:focus,.themes-list-item:hover{background-color:#3d9970;padding:2rem 0}.themes-list-item:active .themes-list-item-description,.themes-list-item:active .themes-list-item-title,.themes-list-item:focus .themes-list-item-description,.themes-list-item:focus .themes-list-item-title,.themes-list-item:hover .themes-list-item-description,.themes-list-item:hover .themes-list-item-title{color:#fff}.themes-list-link,.themes-list-link:visited{color:#444;text-decoration:none}.themes-list-item-title{margin:0}.themes-list-item-description{opacity:.8}.container{margin:0 200px}pre code{font-size:1em}pre{font-size:.9166666666666667em;font-family:Monaco,monospace,Courier,&quot;Courier New&quot;;overflow:auto;line-height:1.75em;margin-bottom:1.75em;padding:10px;white-space:pre;white-space:pre-wrap;word-wrap:break-word;background:#EEEEEE}code{font-size:.9166666666666667em;font-family:Monaco,monospace,Courier,&quot;Courier New&quot;}</style><div class='container'>"+newValue+"</div>"
    fs.writeFileSync(file, newVal, 'utf-8')
  }
}
