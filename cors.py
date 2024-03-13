from http.server import SimpleHTTPRequestHandler
import http.server

class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow_origin', '*')
        super().end_headers()
        
if __name__ == "__main__":
    http.server.test(HandlerClass=CORSRequestHandler)
    