import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 bg-gradient-to-br from-primary/5 to-background">
      <div className="max-w-md w-full text-center">
        {/* 404 Display */}
        <h1 className="text-7xl font-bold mb-4 text-primary">404</h1>
        
        {/* Main Message Card */}
        <Card className="border">
          <CardContent className="p-8">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-xl">
              🚀
            </div>
            
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Page Not Found
            </h2>
            
            <p className="text-muted-foreground mb-6">
              The page you're looking for doesn't exist or has been moved.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={goBack} size="sm">
                ← Go Back
              </Button>
              <Button 
                onClick={() => window.location.href = '/'}
                variant="outline"
                size="sm"
              >
                Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}