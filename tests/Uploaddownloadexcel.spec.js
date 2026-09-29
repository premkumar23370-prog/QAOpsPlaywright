const {test, expect}= require('@playwright/test');
const Exceljs=require('exceljs');
async function excelText(Textneedtochange,Changedtext,change,path)
{
//let rowNumber1;
//let colNumber1;

const workbook=new Exceljs.Workbook();
await workbook.xlsx.readFile(path);
const worksheet=workbook.getWorksheet('Sheet1');
const output=await readExcel(worksheet,Textneedtochange);
 const cell=worksheet.getCell(output.row,output.column+change.colChange);
        cell.value=Changedtext;
        await workbook.xlsx.writeFile(path);
        console.log(cell.value);
}

async function readExcel(worksheet,Textneedtochange)
 {
    let output={row:-1,column:-1};
worksheet.eachRow((row,rowNumber)=>{
    row.eachCell((cell,colNumber)=>{
        if(cell.value===Textneedtochange)
            {
        output.row=rowNumber;
        output.column=colNumber;
    }

    })

})
return output;
}

test('@smoke UDexcel',async({page})=>{
    //const Textneedtochange='Mango'
    //const Changedtext='350'
    await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
   const download=page.waitForEvent('download');
    await page.getByRole('Button', {name:'Download'}).click();
   
     //await page.pause();
    const d1=await download;
    await d1.saveAs("C:/Users/ASUS/Downloads/download.xlsx");
    //const filePath=await d1.path()
    //console.log(filePath);
    await excelText('Mango',10000,{rowChange:0,colChange:2},"C:/Users/ASUS/Downloads/download.xlsx");
    //await page.locator("#fileinput").click();
    await page.locator("#fileinput").setInputFiles("C:/Users/ASUS/Downloads/download.xlsx")
    await page.pause();




})



