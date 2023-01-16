const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const mergerpdfs = async (p1,p2) => {
    await merger.add(p1);
    await merger.add(p2);

    let d = new Date().getTime() // timestamp based file naming
    //await merger.save('public/merged.pdf');
    await merger.save(`public/${d}.pdf`);
    return d

    // ...('pdf1.pdf' , 2)         merge all pages.
    // ...('pdf1.pdf' , 2)         merge only page 2.
    // ...('pdf1.pdf' , [1,3])     merge only pages 1 & 3.
    // ...('pdf1.pdf' , '4, 7, 8') merge only page 4,7 & 8.
    // ...('pdf1.pdf' , '3 to 5')  merge only page 3 to 5 (3,4,5).
    // ...('pdf1.pdf' , '3-5')     merge only page 3 to 5.
}
 module.exports = {mergerpdfs}