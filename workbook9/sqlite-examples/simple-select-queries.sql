=IF(B5=0, "Error", IFERROR(SUMPRODUCT(('WORK DRIVER'!CQ:CQ=C5)*ISNUMBER(MATCH('WORK DRIVER'!CV:CV, {"MRM Tasks","OMRs","RAIs","RMs"}, 0))*N('WORK DRIVER'!GC:GC))/B5, "Error"))
=IF(B5=0, "Error", IFERROR(SUMPRODUCT(('WORK DRIVER'!CQ$2:CQ$1000=C5)*ISNUMBER(MATCH('WORK DRIVER'!CV$2:CV$1000, {"MRM Tasks","OMRs","RAIs","RMs"}, 0))*N('WORK DRIVER'!GC$2:GC$1000))/B5, "Error"))


First, I’d like to walk you through the calculation steps I plan to take. Second, I want to highlight some challenges I’m facing with the Excel file. Please let me know if you have any suggestions or an alternative approach.

Calculation Steps & Logic:
	1.	Sum of Capacity Values:
Sum the values from the Capacity tab where the Summary column matches “RAI”, “OM”, or “BAU”, and the Year is “2025”, for a specific model. ✅ (Completed)
	2.	Combine Work Driver Totals:
Aggregate the weighted totals of OMR, RAI, MRM tasks, and RMs from the Work Driver tab.
	3.	Total Capacity for a Model’s Work:
Divide the weighted total (from step 2) by the total capacity.
	4.	Capacity by Item Type:
Multiply each Item Type’s value by the result from step 3.

⸻

Challenge:

The issue arises in step 2 — the Work Driver tab contains only formulas. Excel doesn’t allow recalculating an already calculated result directly within a formula.


IFERROR(IF(B5=0, "Error", SUMPRODUCT(('WORK DRIVER'!CQ:CQ=C5)*ISNUMBER(MATCH('WORK DRIVER'!CV:CV, {"MRM Tasks","OMRs","RAIs","RMs"}, 0))*N('WORK DRIVER'!GC:GC))/B5), "Error")