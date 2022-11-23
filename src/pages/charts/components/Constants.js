import data from "../../../data";

export const batches = Object.keys(data);

export const sensors = Object.keys(data[batches[0]]);

export const batchColors = {
  AP400E0101: "hsl(330, 70%, 50%)",
  AP400E0102: "hsl(62, 70%, 50%)",
  BP400E0101: "hsl(80, 70%, 50%)",
  BP400E0102: "hsl(47, 70%, 50%)",
  CP400E0101: "hsl(17, 70%, 50%)",
  CP400E0102: "hsl(160, 70%, 50%)",
};
