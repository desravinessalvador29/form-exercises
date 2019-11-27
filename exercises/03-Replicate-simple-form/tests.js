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
    // it('<title> tag exists and the innerHTML needs to be "Hello World"', function () {
    //  let a = document.documentElement.innerHTML = html.toString()
    //        expect(a.indexOf("<title>")).not.toBe(-1)
    //        expect(document.querySelector("title").innerHTML).toBe("Hello World")
    // })
      it('<body> tag exists', function () {
     let a = document.documentElement.innerHTML = html.toString()
           expect(a.indexOf("<body")).not.toBe(-1)
    })



    it('you should create a <form> tag', function () {
    let a = document.documentElement.innerHTML = html.toString()
        expect(a.indexOf("<form")).not.toBe(-1)
    })

    it('you should create a <tr> tag', function () {
    let a = document.documentElement.innerHTML = html.toString()
        expect(a.indexOf("<tr")).not.toBe(-1)
    })

    it('you should have 2 <th> tags', function () {
    let a = document.documentElement.innerHTML = html.toString()
        expect(a.indexOf("<th")).not.toBe(-1)
    })

    it('you should have an <input> tags', function () {
        let a = document.documentElement.innerHTML = html.toString()
        expect(a.indexOf("<input")).not.toBe(-1)
    })

    it('You should create an input type=radio with value male', function () {
        let inputs = document.querySelectorAll("form input");
        let a = document.documentElement.innerHTML = html.toString()
        expect(a.indexOf("<input")).not.toBe(-1)
        expect(inputs[1].type).toBe("radio");
        expect(inputs[1].value).toBe("male");
    })

    it('You should create an input type=radio with value female', function () {
        let inputs = document.querySelectorAll("form input");
        let a = document.documentElement.innerHTML = html.toString()
        expect(a.indexOf("<input")).not.toBe(-1)
        expect(inputs[2].type).toBe("radio");
        expect(inputs[2].value).toBe("female");
    })

    it('you should have an <select> tags', function () {
        let a = document.documentElement.innerHTML = html.toString()
        expect(a.indexOf("<select")).not.toBe(-1)
    })

    it('you should have a second <input> tag', function () {
        let inputs = document.querySelectorAll("form input");
        let a = document.documentElement.innerHTML = html.toString()
        expect(a.indexOf("<input")).not.toBe(-1)
        expect(inputs[3].type).toBe("checkbox");
    })

    it('you should have an <textarea> tags', function () {
        let a = document.documentElement.innerHTML = html.toString()
        expect(a.indexOf("<textarea")).not.toBe(-1)
    }) 

});

