import express from "express";
import connection from "./config/db.js";
import dotenv from "dotenv";
import userRouter from "./route/user.route.js";
import cors from "cors";
import { router } from "./route/product.route.js";
import razorRouter from "./route/razor.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enhanced CORS configuration
const allowedOrigins = process.env.NODE_ENV === "production"
    ? ["https://your-frontend-domain.com"] // Add your frontend domain
    : ["*"]; // Allow all origins in development

app.use(cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

// Middleware for parsing JSON
app.use(express.json());

// Routes
app.use("/user", userRouter);
app.use("/product", router);
app.use("/razor", razorRouter);

// Root route
app.get("/", (req, res) => {
    res.send("Hello World, welcome");
});

// Handle missing routes
app.use((req, res) => {
    res.status(404).send({ message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error("Server Error:", err);
    res.status(500).send({ message: "Internal Server Error", error: err.message });
});

// Start the server
app.listen(PORT, async () => {
    try {
        await connection;
        console.log(`Server is running on port ${PORT} and DB is connected.`);
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
});
