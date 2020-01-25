(function () {

  fileInput.addEventListener('click', build)

  function build(event) {
    if (typeof window.FileReader !== 'function')
    throw ("The file API isn't supported on this browser.");
    const fileInput = document.getElementById('submit')
    let input = event.target;
    if (!fileInput)
      throw ("The browser does not properly implement the event object");
    if (!fileInput.files)
      throw ("This browser does not support the `files` property of the file input.");
    if (!fileInput.files[0])
      return undefined;

    let file = fileInput.files[0];
    let fileReader = new FileReader();
    fileReader.onload = function(reader) {
      var doc = new jsPDF()

      doc.setFontSize(40)
      doc.text(35, 25, 'Here you gooo!')
      doc.addImage(reader.currentTarget.result, 'JPEG', 15, 40, 180, 160)
      doc.addPage()
      doc.addImage(reader.currentTarget.result, 'JPEG', 15, 40, 180, 160)
      // doc.save('manel.pdf')
    }

    fileReader.readAsDataURL(file)
  }
})()