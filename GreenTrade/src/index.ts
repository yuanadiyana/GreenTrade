class EnergyCredit {
    id: string;
    owner: string;
    amount: number;
    price: number;
    tradeStatus: "available" | "sold";
    createdAt: Date;
    updatedAt: Date | null;
  }
  
  const energyCreditStorage = StableBTreeMap<string, EnergyCredit>(0);
  
  app.post("/energyCredits", (req, res) => {
    const credit: EnergyCredit = {
      id: uuidv4(),
      createdAt: getCurrentDate(),
      ...req.body,
      updatedAt: null,
    };
    energyCreditStorage.insert(credit.id, credit);
    res.json({ message: "Energy credit listed for trade", credit });
  });
  
  // Add endpoints to fetch, update, and delete energy credits.
  