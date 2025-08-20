const getTheTitles = function(books) {

    const titleArray = books.map(({ title }) => (title));
    return titleArray;

};

// Do not edit below this line
module.exports = getTheTitles;
