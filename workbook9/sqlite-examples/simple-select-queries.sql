=IFERROR(
    SUM(
        SUMIFS('WORK DRIVER'!GC:GC, 'WORK DRIVER'!CO:CO, C13, 'WORK DRIVER'!CV:CV, {"MRM Tasks", "OMRs", "RAIs", "RMs"})
    ) / B13,
0)