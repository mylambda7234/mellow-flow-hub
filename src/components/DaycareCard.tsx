import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Clock, Users, Shield, Heart } from "lucide-react";

interface DaycareCardProps {
  name: string;
  location: string;
  rating: number;
  price: string;
  ageRange: string;
  facilities: string[];
  image: string;
  verified: boolean;
  distance: string;
}

const DaycareCard = ({ 
  name, 
  location, 
  rating, 
  price, 
  ageRange, 
  facilities, 
  image, 
  verified, 
  distance 
}: DaycareCardProps) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02, 
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)" 
      }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <Card className="overflow-hidden border-2 hover:border-primary/20 transition-all duration-300">
        <div className="relative">
          <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
            <Heart className="h-16 w-16 text-primary/30" />
          </div>
          {verified && (
            <Badge className="absolute top-2 left-2 bg-green-500 hover:bg-green-500">
              <Shield className="h-3 w-3 mr-1" />
              Verified
            </Badge>
          )}
          <div className="absolute top-2 right-2 flex items-center bg-background/90 rounded-full px-2 py-1">
            <Star className="h-3 w-3 text-yellow-500 fill-current mr-1" />
            <span className="text-xs font-medium">{rating}</span>
          </div>
        </div>
        
        <CardHeader className="pb-3">
          <CardTitle className="text-lg group-hover:text-primary transition-colors">
            {name}
          </CardTitle>
          <CardDescription className="flex items-center text-sm">
            <MapPin className="h-3 w-3 mr-1" />
            {location} • {distance}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-muted-foreground">
              <Users className="h-4 w-4 mr-1" />
              {ageRange}
            </div>
            <div className="text-lg font-bold text-primary">{price}</div>
          </div>
          
          <div className="flex flex-wrap gap-1">
            {facilities.slice(0, 3).map((facility, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {facility}
              </Badge>
            ))}
            {facilities.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{facilities.length - 3} more
              </Badge>
            )}
          </div>
          
          <div className="flex gap-2 pt-2">
            <Button size="sm" className="flex-1">
              Book Visit
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DaycareCard;