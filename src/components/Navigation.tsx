import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, MapPin } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { name: "Home", href: "#", active: true },
    { name: "About", href: "#about" },
    { name: "Enlist", href: "#enlist" },
    { name: "Babylounges", href: "#babylounges" },
    { name: "Training", href: "#training" },
    { name: "Enquiry", href: "#enquiry" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-2xl font-bold">
              <span className="text-primary">MAMA'S</span>{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                BABY LOUNGE
              </span>
            </div>
          </motion.div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  item.active 
                    ? "text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary" 
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button variant="outline" size="sm">
              Login
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;