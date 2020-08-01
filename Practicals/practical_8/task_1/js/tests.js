function indexOfTest() {
    var name = "university of ulster";
    
    var iposition = name.indexOf("i", 1);
    console.log(iposition); // iposition = 2

    iposition = name.indexOf("i", 3);
    console.log(iposition); // iposition = 7

    var erposition = name.indexOf("er");
    console.log(erposition); // erposition = 4
}