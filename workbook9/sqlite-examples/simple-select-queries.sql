=SUM(FILTER(Data!W:W, (ISNUMBER(SEARCH({"RAI","OMR","BAU"}, Data!E:E))) * (Data!F:F = "M" & B2)))

SELECT FirstName, LastName FROM Customers WHERE LastName = 'Griffin';