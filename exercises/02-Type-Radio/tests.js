const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

jest.dontMock('fs');

describe('basic HTML structure', function () {
    beforeEach(() => { document.documentElement.innerHTML = html.toString(); });
    afterEach(() => { jest.resetModules(); });

     it('order of HTML tags', function () {
        let a = document.documentElement.innerHTML = html.toString()
        let b = a.indexOf("<!DOCTYPE html>")
        let c = a.indexOf("<html")
        let d = a.indexOf("<head>")
        let e = a.indexOf("<title>")
        let f = a.indexOf("<body>")

        //here we check for the order of the tags
        expect(b).toBeLessThan(c)
        expect(c).toBeLessThan(d)
        expect(d).toBeLessThan(e)
        expect(e).toBeLessThan(f)

    })

 it('<!DOCTYPE html> tag should exist', function () {
     let a = document.documentElement.innerHTML = html.toString()
           expect(a.indexOf("<!DOCTYPE html>")).not.toBe(-1)
    })
    it('<html> tag should exists', function () {
     let a = document.documentElement.innerHTML = html.toString()
           expect(a.indexOf("<html")).not.toBe(-1)
    })
        it('<head> tag should exists', function () {
     let a = document.documentElement.innerHTML = html.toString()
           expect(a.indexOf("<head>")).not.toBe(-1)
    })
    it('<title> tag exists and the innerHTML needs to be "Hello World"', function () {
     let a = document.documentElement.innerHTML = html.toString()
           expect(a.indexOf("<title>")).not.toBe(-1)
           expect(document.querySelector("title").innerHTML).toBe("Hello World")
    })
      it('<body> tag exists', function () {
     let a = document.documentElement.innerHTML = html.toString()
           expect(a.indexOf("<body")).not.toBe(-1)


    })
    it('You should create an input type=radio with value male', function () {
        //console.log("$$$", document.querySelectorAll("input"))
        let myBody = document.querySelectorAll("form input");
        //console.log("form", myBody[0].value)
        //console.log("myBody", myBody[0].attributes[0].name)
        let a = document.documentElement.innerHTML = html.toString()
        expect(a.indexOf("<input")).not.toBe(-1)
        let tempType = ""
        let tempValue = ""
        for (let x = 0; x < myBody.length; x++) {
            console.log('the first loog is working')
             for (let i = 0; i < myBody[x].length; i++) {
                 console.log('the second loop is working')
                if (myBody[x].attributes[i] === "type") {
                    tempType = myBody[x].attributes[i].value
                    expect(tempType).toBe("radio")
                }

                if (myBody[x].attributes[i] === "value") {
                    tempValue = myBody[x].attributes[i].value
                    //console.log("tempValue",tempValue)
                    expect(tempValue).toBe("male")
                }

                }
            }



    })
      it('You should create an input type=radio with value female', function () {
          let myBody = document.querySelector("form").children
          //console.log("myBody", myBody[0].attributes[0].name)
     let a = document.documentElement.innerHTML = html.toString()
           expect(a.indexOf("<input")).not.toBe(-1)
           let tempType = ""
           for (let i=0; i<myBody[0].attributes.length; i++)
           {
               if (myBody[0].attributes[i].name === "type"){
                   tempType = myBody[0].attributes[i].value
                   //console.log("tempType",tempType)
                   expect(tempType).toBe("radio")
               }

           }
           expect(myBody[0].attributes[0].name) .toBe("type")
           //console.log("html", a.indexOf("<input"))
    })


});