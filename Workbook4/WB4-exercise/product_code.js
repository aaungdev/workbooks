function parsePartCode(partCode) {
    const positionOfColon = partCode.indexOf(":");
    const positionOfHyphen = partCode.indexOf("-");
  
    const supplierCode = partCode.substring(0, positionOfColon);
    const productNumber = partCode.substring(positionOfColon + 1, positionOfHyphen);
    const size = partCode.substring(positionOfHyphen + 1);
  
    const parsedCode = {
      supplierCode: supplierCode,
      productNumber: productNumber,
      size: size
    };
  
    console.log("Supplier: " + parsedCode.supplierCode + 
                "\nProduct Number: " + parsedCode.productNumber + 
                "\nSize: " + parsedCode.size);
    return parsedCode;
  }
  
  const partCode1 = "ACME:123-L";
  const partCode2 = "DI:12345-M";
  const partCode3 = "ACE:1-12";
  
  parsePartCode(partCode1);
  parsePartCode(partCode2);
  parsePartCode(partCode3);
  