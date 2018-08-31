export function obj2form(obj, form, namespace) {
  var fd = form || new FormData()
  var formKey
  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (namespace) {
        formKey = namespace + '[' + property + ']'
      } else {
        formKey = property
      }
      // if the property is an object, but not a File,
      // use recursivity.
      if (typeof obj[property] === 'object' && !(obj[property] instanceof File || obj[property] instanceof Blob)) {
        // console.log(obj, property, formKey)
        obj2form(obj[property], fd, formKey)
      } else {
        // if it's a string or a File object
        fd.append(formKey, obj[property])
      }
    }
  }
  return fd
}
