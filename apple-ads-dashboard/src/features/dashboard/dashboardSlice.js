import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  metrics: [
    { label: "Conversions ROAS", value: "0.00%", change: "0%" },
    { label: "Spend", value: "$6109.89", change: "+27.42%" },
    { label: "Installs", value: "44", change: "0%" },
    { label: "CPI", value: "$2.91", change: "0%" },
    { label: "Conversions", value: "0", change: "0%" },
    { label: "Revenue", value: "$0.00", change: "0%" },
  ],
  trends: [
    { date: "Jul 5", spend: 2000 },
    { date: "Jul 6", spend: 4000 },
    { date: "Jul 7", spend: 2700 },
    { date: "Jul 8", spend: 2300 },
    { date: "Jul 9", spend: 3100 },
  ],
  campaigns: [
    { name: "Discovery (LOC)", spend: 6109.89, installs: 44, conv: 0 },
    { name: "Competitor (LOC)", spend: 6109.89, installs: 121, conv: 0 },
    { name: "Today tab (LOC)", spend: 6109.89, installs: 54, conv: 0 },
    { name: "Branding (LOC)", spend: 6109.89, installs: 0, conv: 0 },
  ],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
});

export default dashboardSlice.reducer;
