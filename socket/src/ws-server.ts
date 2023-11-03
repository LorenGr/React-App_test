import WebSocket from "ws";

class WebSocketServer {
  private wss: WebSocket.Server | null = null;

  constructor(private port: number) { }

  start(): void {
    this.wss = new WebSocket.Server({ port: this.port });

    this.wss.on("listening", () => {
      console.log(`WebSocket server listening on port ${this.port}.`);
    });

    this.wss.on("connection", (ws: WebSocket) => {
      console.log(`WebSocket client connected.`);


      ws.on("close", () => {
        console.log(`WebSocket client disconnected.`);

      });

      ws.on("error", (error) => {
        console.error("WebSocket error:", error);
      });
    });
  }
}

export default WebSocketServer;
