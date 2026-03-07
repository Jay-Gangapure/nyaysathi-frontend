// API service layer - placeholder for backend integration

export const api = {
  auth: {
    login: async (email: string, _password: string) => {
      await new Promise(r => setTimeout(r, 1000));
      return { user: { id: "1", name: "User", email }, token: "mock-token" };
    },
    signup: async (data: { name: string; email: string; password: string; language: string }) => {
      await new Promise(r => setTimeout(r, 1000));
      return { user: { id: "1", ...data }, token: "mock-token" };
    },
    logout: async () => { await new Promise(r => setTimeout(r, 500)); },
  },
  assistant: {
    sendMessage: async (message: string, responseLang: string = "en") => {
      await new Promise(r => setTimeout(r, 1500));
      return {
        reply: `This is a placeholder response for: "${message}". In production, this would connect to an AI backend to provide legal information. (Requested language: ${responseLang})`,
      };
    },
  },
  schemes: {
    find: async (_filters: Record<string, string>) => {
      await new Promise(r => setTimeout(r, 1200));
      return [
        { id: "1", name: "PM Kisan Samman Nidhi", description: "Financial benefit of Rs. 6000 per year for small and marginal farmers.", eligibility: "Land-owning farmers with cultivable land", link: "#" },
        { id: "2", name: "Ayushman Bharat", description: "Health insurance coverage of Rs. 5 lakh per family per year.", eligibility: "Families identified as deprived", link: "#" },
        { id: "3", name: "Ujjwala Yojana", description: "Free LPG connections to women from BPL households.", eligibility: "Women from BPL families", link: "#" },
      ];
    },
  },
  documents: {
    upload: async (_file: File) => {
      await new Promise(r => setTimeout(r, 2000));
      return {
        summary: "This document appears to be a rental agreement between two parties. Key clauses include monthly rent of ₹15,000, security deposit of ₹45,000, and a lock-in period of 11 months.",
        keyPoints: [
          "Monthly rent: ₹15,000",
          "Security deposit: ₹45,000",
          "Lock-in period: 11 months",
          "Notice period: 1 month",
          "Maintenance charges: Included",
        ],
      };
    },
  },
  directory: {
    search: async (_state: string, _district: string) => {
      await new Promise(r => setTimeout(r, 800));
      return [
        { id: "1", name: "District Legal Services Authority", contact: "+91 1234567890", website: "https://nalsa.gov.in", address: "Court Complex, Main Road" },
        { id: "2", name: "State Legal Aid Center", contact: "+91 9876543210", website: "https://nalsa.gov.in", address: "High Court Campus" },
        { id: "3", name: "Free Legal Aid Clinic", contact: "+91 5555555555", website: "https://nalsa.gov.in", address: "Community Center, Block B" },
      ];
    },
  },
};
