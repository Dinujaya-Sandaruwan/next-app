import { z } from "zod";

const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
});

export default productSchema;
