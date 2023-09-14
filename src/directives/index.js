import imgLazy from "@/directives/img-lazy";

const directives = {
  imgLazy
}

export default {
  install(app) {
    Object.keys(directives).forEach(key => {
      app.directive(key, directives[key])
    })
  }
}
