import { z } from "zod";

// Validation partagée client/serveur (TDD §4.4). Reflète le référentiel
// centralisé Diocèse → Doyenné → Ville → Paroisse (Volume 11 §11.7) :
// jamais de saisie libre, toujours une sélection dans ces listes.
export const createParoisseSchema = z.object({
  name: z.string().min(2),
  doyenneId: z.string().uuid(),
  villeId: z.string().uuid(),
  address: z.string().optional(),
});

export type CreateParoisseInput = z.infer<typeof createParoisseSchema>;
