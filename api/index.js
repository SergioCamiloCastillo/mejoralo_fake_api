const express = require("express");
const app = express();
const PORT = 8001;

// Middleware
app.use(express.json());

// Simulación de base de datos (esto debería ser reemplazado con una base de datos real)
let users = [
  {
    idUser: 1,
    name: "Lorraine Baines",
    urlImage:
      "https://static.wikia.nocookie.net/p__/images/7/7a/8FC51F9D-0E81-4DD3-B7EC-3D43508532D6.jpg/revision/latest?cb=20220304101815&path-prefix=protagonist",
  },
  {
    idUser: 2,
    name: "Marty McFly",
    urlImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3fs3ASb6aMv1wkaRABJz77UG2H4SFWm8lVg&s",
  },
];

let investments = [
  // Usuario 1 - 12 inversiones
  {
    idInvestment: 1,
    idUser: 1,
    amount: 1500000.0,
    nameBank: "Davivienda",
    rate: 0.011,
    startDate: "2023-01-01",
    endDate: "2023-12-31",
    urlImageBank:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn9btAIorkZMiKj9b4PzfkxHzYfx6orfsI0g&s",
  },
  {
    idInvestment: 854,
    idUser: 1,
    amount: 1910000.0,
    nameBank: "Davivienda",
    rate: 0.018,
    startDate: "2023-05-01",
    endDate: "2023-12-31",
    urlImageBank:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn9btAIorkZMiKj9b4PzfkxHzYfx6orfsI0g&s",
  },
  {
    idInvestment: 2,
    idUser: 1,
    amount: 2500000.0,
    nameBank: "Bancolombia",
    rate: 0.015,
    startDate: "2023-02-01",
    endDate: "2024-01-31",
    urlImageBank:
      "https://bulevar.com.co/wp-content/uploads/2023/07/bancolombia.jpg",
  },
  {
    idInvestment: 3,
    idUser: 1,
    amount: 1800000.0,
    nameBank: "Davivienda",
    rate: 0.012,
    startDate: "2023-03-01",
    endDate: "2023-12-01",
    urlImageBank:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn9btAIorkZMiKj9b4PzfkxHzYfx6orfsI0g&s",
  },
  {
    idInvestment: 4,
    idUser: 1,
    amount: 2200000.0,
    nameBank: "Davivienda",
    rate: 0.013,
    startDate: "2023-04-01",
    endDate: "2024-04-01",
    urlImageBank:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn9btAIorkZMiKj9b4PzfkxHzYfx6orfsI0g&s",
  },
  {
    idInvestment: 5,
    idUser: 1,
    amount: 3200000.0,
    nameBank: "Bancolombia",
    rate: 0.016,
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    urlImageBank:
      "https://bulevar.com.co/wp-content/uploads/2023/07/bancolombia.jpg",
  },
  {
    idInvestment: 6,
    idUser: 1,
    amount: 1050000.0,
    nameBank: "Banco de Bogotá",
    rate: 0.023,
    startDate: "2023-08-01",
    endDate: "2024-08-01",
    urlImageBank:
      "https://logowik.com/content/uploads/images/banco-de-bogota7212.logowik.com.webp",
  },
  {
    idInvestment: 7,
    idUser: 1,
    amount: 12000000.0,
    nameBank: "BBVA",
    rate: 0.029,
    startDate: "2023-07-01",
    endDate: "2024-07-01",
    urlImageBank:
      "https://cdn3.bonitasoft.com/sites/default/files/customer/bbva_0.png",
  },
  {
    idInvestment: 8,
    idUser: 1,
    amount: 5400000.0,
    nameBank: "BBVA",
    rate: 0.025,
    startDate: "2023-09-15",
    endDate: "2024-09-15",
    urlImageBank:
      "https://cdn3.bonitasoft.com/sites/default/files/customer/bbva_0.png",
  },
  {
    idInvestment: 9,
    idUser: 1,
    amount: 1345000.0,
    nameBank: "Banco de Bogotá",
    rate: 0.022,
    startDate: "2024-01-01",
    endDate: "2025-01-01",
    urlImageBank:
      "https://logowik.com/content/uploads/images/banco-de-bogota7212.logowik.com.webp",
  },
  {
    idInvestment: 10,
    idUser: 1,
    amount: 2900000.0,
    nameBank: "Scotiabank",
    rate: 0.017,
    startDate: "2024-02-01",
    endDate: "2025-02-01",
    urlImageBank:
      "https://cdn.icon-icons.com/icons2/2699/PNG/512/scotiabank_logo_icon_168845.png",
  },
  {
    idInvestment: 11,
    idUser: 1,
    amount: 3400000.0,
    nameBank: "Davivienda",
    rate: 0.02,
    startDate: "2023-10-01",
    endDate: "2024-10-01",
    urlImageBank:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn9btAIorkZMiKj9b4PzfkxHzYfx6orfsI0g&s",
  },
  {
    idInvestment: 12,
    idUser: 1,
    amount: 4500000.0,
    nameBank: "Scotiabank",
    rate: 0.015,
    startDate: "2024-04-01",
    endDate: "2025-05-01",
    urlImageBank:
      "https://cdn.icon-icons.com/icons2/2699/PNG/512/scotiabank_logo_icon_168845.png",
  },

  // Usuario 2 - 10 inversiones
  {
    idInvestment: 13,
    idUser: 2,
    amount: 500000.0,
    nameBank: "Banco de Bogotá",
    rate: 0.02,
    startDate: "2022-05-01",
    endDate: "2023-05-01",
    urlImageBank:
      "https://logowik.com/content/uploads/images/banco-de-bogota7212.logowik.com.webp",
  },
  {
    idInvestment: 13,
    idUser: 2,
    amount: 570000.0,
    nameBank: "Banco de Bogotá",
    rate: 0.018,
    startDate: "2022-05-01",
    endDate: "2023-05-01",
    urlImageBank:
      "https://logowik.com/content/uploads/images/banco-de-bogota7212.logowik.com.webp",
  },
  {
    idInvestment: 58,
    idUser: 2,
    amount: 3470000.0,
    nameBank: "Banco de Bogotá",
    rate: 0.0174,
    startDate: "2022-04-01",
    endDate: "2023-09-01",
    urlImageBank:
      "https://logowik.com/content/uploads/images/banco-de-bogota7212.logowik.com.webp",
  },
  {
    idInvestment: 14,
    idUser: 2,
    amount: 2600000.0,
    nameBank: "Bancolombia",
    rate: 0.014,
    startDate: "2023-05-01",
    endDate: "2024-05-01",
    urlImageBank:
      "https://bulevar.com.co/wp-content/uploads/2023/07/bancolombia.jpg",
  },
  {
    idInvestment: 15,
    idUser: 2,
    amount: 550000.0,
    nameBank: "Banco de Bogotá",
    rate: 0.021,
    startDate: "2022-07-01",
    endDate: "2023-07-01",
    urlImageBank:
      "https://logowik.com/content/uploads/images/banco-de-bogota7212.logowik.com.webp",
  },
  {
    idInvestment: 16,
    idUser: 2,
    amount: 8000000.0,
    nameBank: "BBVA",
    rate: 0.028,
    startDate: "2023-06-15",
    endDate: "2024-06-15",
    urlImageBank:
      "https://cdn3.bonitasoft.com/sites/default/files/customer/bbva_0.png",
  },
  {
    idInvestment: 17,
    idUser: 2,
    amount: 2800000.0,
    nameBank: "Scotiabank",
    rate: 0.018,
    startDate: "2024-01-01",
    endDate: "2025-01-01",
    urlImageBank:
      "https://cdn.icon-icons.com/icons2/2699/PNG/512/scotiabank_logo_icon_168845.png",
  },
  {
    idInvestment: 18,
    idUser: 2,
    amount: 3600000.0,
    nameBank: "Scotiabank",
    rate: 0.019,
    startDate: "2024-02-01",
    endDate: "2025-02-01",
    urlImageBank:
      "https://cdn.icon-icons.com/icons2/2699/PNG/512/scotiabank_logo_icon_168845.png",
  },
  {
    idInvestment: 19,
    idUser: 2,
    amount: 4100000.0,
    nameBank: "Davivienda",
    rate: 0.019,
    startDate: "2024-03-01",
    endDate: "2025-03-01",
    urlImageBank:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn9btAIorkZMiKj9b4PzfkxHzYfx6orfsI0g&s",
  },
  {
    idInvestment: 20,
    idUser: 2,
    amount: 3400000.0,
    nameBank: "Bancolombia",
    rate: 0.021,
    startDate: "2023-07-01",
    endDate: "2024-07-01",
    urlImageBank:
      "https://bulevar.com.co/wp-content/uploads/2023/07/bancolombia.jpg",
  },
  {
    idInvestment: 21,
    idUser: 2,
    amount: 2500000.0,
    nameBank: "Banco de Bogotá",
    rate: 0.023,
    startDate: "2023-08-01",
    endDate: "2024-08-01",
    urlImageBank:
      "https://logowik.com/content/uploads/images/banco-de-bogota7212.logowik.com.webp",
  },
  {
    idInvestment: 22,
    idUser: 2,
    amount: 1200000.0,
    nameBank: "BBVA",
    rate: 0.025,
    startDate: "2024-04-15",
    endDate: "2025-04-15",
    urlImageBank:
      "https://cdn3.bonitasoft.com/sites/default/files/customer/bbva_0.png",
  },
];
let rateDataList = [
  {
    idRateData: 1,
    nameBank: "Banco de Bogotá",
    urlImageBank: "https://example.com/banco_bogota.png",
    cdtRate: 0.014,
    durationMonths: 3,
  },
  {
    idRateData: 2,
    nameBank: "Banco de Occidente",
    urlImageBank: "https://example.com/banco_occidente.png",
    cdtRate: 0.015,
    durationMonths: 3,
  },
  {
    idRateData: 3,
    nameBank: "Davivienda",
    urlImageBank: "https://example.com/davivienda.png",
    cdtRate: 0.019,
    durationMonths: 6,
  },
  {
    idRateData: 4,
    nameBank: "Bancolombia",
    urlImageBank: "https://example.com/bancolombia.png",
    cdtRate: 0.03,
    durationMonths: 3,
  },
  {
    idRateData: 5,
    nameBank: "BBVA",
    urlImageBank: "https://example.com/bbva.png",
    cdtRate: 0.025,
    durationMonths: 12,
  },
  {
    idRateData: 6,
    nameBank: "Scotiabank",
    urlImageBank: "https://example.com/scotiabank.png",
    cdtRate: 0.022,
    durationMonths: 6,
  },
  {
    idRateData: 7,
    nameBank: "Banco de Occidente",
    urlImageBank: "https://example.com/banco_occidente.png",
    cdtRate: 0.018,
    durationMonths: 9,
  },
  {
    idRateData: 8,
    nameBank: "Davivienda",
    urlImageBank: "https://example.com/davivienda.png",
    cdtRate: 0.02,
    durationMonths: 12,
  },
  {
    idRateData: 9,
    nameBank: "Bancolombia",
    urlImageBank: "https://example.com/bancolombia.png",
    cdtRate: 0.026,
    durationMonths: 18,
  },
  {
    idRateData: 10,
    nameBank: "BBVA",
    urlImageBank: "https://example.com/bbva.png",
    cdtRate: 0.032,
    durationMonths: 24,
  },
  {
    idRateData: 11,
    nameBank: "Scotiabank",
    urlImageBank: "https://example.com/scotiabank.png",
    cdtRate: 0.027,
    durationMonths: 24,
  },
  {
    idRateData: 12,
    nameBank: "Banco de Bogotá",
    urlImageBank: "https://example.com/banco_bogota.png",
    cdtRate: 0.029,
    durationMonths: 12,
  },
  {
    idRateData: 13,
    nameBank: "BBVA",
    urlImageBank: "https://example.com/bbva.png",
    cdtRate: 0.021,
    durationMonths: 6,
  },
  {
    idRateData: 14,
    nameBank: "Banco de Occidente",
    urlImageBank: "https://example.com/banco_occidente.png",
    cdtRate: 0.02,
    durationMonths: 18,
  },
  {
    idRateData: 15,
    nameBank: "Davivienda",
    urlImageBank: "https://example.com/davivienda.png",
    cdtRate: 0.017,
    durationMonths: 24,
  },
];
// Endpoint para obtener todos los usuarios
app.get("/api/users", (req, res) => {
  res.json(users);
});
app.get("/api/data-rate", (req, res) => {
  res.json(rateDataList);
});

// Endpoint para obtener las inversiones por idUser
app.get("/api/investments", (req, res) => {
  const { idUser } = req.query; // Recibe el idUser como un parámetro de consulta
  if (!idUser) {
    return res.status(400).json({ error: "El idUser es requerido" });
  }

  const userInvestments = investments.filter(
    (investment) => investment.idUser == idUser
  );

  if (userInvestments.length === 0) {
    return res
      .status(404)
      .json({ error: "No se encontraron inversiones para este usuario." });
  }

  res.json(userInvestments);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log("Servidor corriendo en http://localhost:${PORT}");
});
