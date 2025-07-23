import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Baby, Users, Shield, Star, ArrowRight, MapPin, Clock, Award, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import DaycareCard from "@/components/DaycareCard";
import motherBabyHero from "@/assets/mother-baby-hero.jpg";
import happyBaby from "@/assets/happy-baby.jpg";

const Index = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Verified & Safe Daycare Listings",
      description: "All daycares on our platform go through background checks and safety checks so parents can trust where they're sending their child."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Growing a Strong Daycare Network",
      description: "We're bringing together well-established daycares from across different cities in India to create a wide and reliable network for families."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Extra Support When Needed",
      description: "We also offer nanny training for women who want to work in childcare and help convert selected homes into daycare spaces where there's demand."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Ready to Grow Bigger",
      description: "In the future, we aim to expand across more cities, connect more daycares, and support even more families with trusted childcare solutions."
    }
  ];

  const daycares = [
    {
      name: "Little Stars Daycare",
      location: "Koramangala, Bangalore",
      rating: 4.8,
      price: "₹8,000/month",
      ageRange: "6 months - 5 years",
      facilities: ["CCTV", "Nutritious Meals", "Playground", "Medical Care", "Activities"],
      image: "",
      verified: true,
      distance: "2.3 km"
    },
    {
      name: "Sunshine Kids Center",
      location: "Indiranagar, Bangalore",
      rating: 4.6,
      price: "₹12,000/month",
      ageRange: "1 - 6 years",
      facilities: ["AC Rooms", "Swimming Pool", "Music Classes", "Transport", "Yoga"],
      image: "",
      verified: true,
      distance: "1.8 km"
    },
    {
      name: "Happy Tots Nursery",
      location: "Whitefield, Bangalore",
      rating: 4.7,
      price: "₹6,500/month",
      ageRange: "3 months - 4 years",
      facilities: ["Organic Food", "Montessori", "Sleep Room", "Art Classes", "Garden"],
      image: "",
      verified: true,
      distance: "3.1 km"
    },
    {
      name: "Rainbow Children's Hub",
      location: "HSR Layout, Bangalore",
      rating: 4.9,
      price: "₹15,000/month",
      ageRange: "6 months - 6 years",
      facilities: ["Smart Classes", "Dance", "Cooking", "Library", "Sports"],
      image: "",
      verified: true,
      distance: "1.2 km"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center px-4 bg-gradient-to-br from-soft-pink via-background to-gentle-blue overflow-hidden"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-16">
          {/* Left Content */}
          <motion.div
            variants={fadeInUp}
            className="space-y-8"
          >
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Find the Perfect{" "}
              <span className="text-primary">Daycare</span>{" "}
              Near You.
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-accent-foreground/80"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Do you need a creche or daycare?
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="px-12 py-6 text-lg font-semibold rounded-full bg-foreground text-background hover:bg-foreground/90 hover:scale-105 transition-all duration-300"
              >
                Explore Now
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={motherBabyHero} 
                alt="Mother with baby" 
                className="w-full h-[600px] object-cover"
              />
              <motion.div 
                className="absolute bottom-8 right-8 w-16 h-16 bg-warm-yellow rounded-full"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Daycare Listings Section - Prime Focus */}
      <motion.section 
        id="babylounges"
        className="py-20 px-4 bg-muted/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Daycares Near You</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover trusted and verified daycare centers in your area with transparent pricing and facilities
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {daycares.map((daycare, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <DaycareCard {...daycare} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button size="lg" variant="outline" className="px-8 py-3">
              <MapPin className="h-4 w-4 mr-2" />
              View All Daycares in Your Area
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Section */}
      <motion.section 
        id="about"
        className="py-20 px-4 bg-muted/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">What Sets Us Apart</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Mama's Baby Lounge</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              At Mama's Baby Lounge, we are building a trusted, well-organized, and easy-to-use 
              platform that connects parents with safe, reliable, and verified daycare services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex gap-4 p-6 rounded-xl bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
              
              <motion.div
                variants={fadeInUp}
                className="pt-4"
              >
                <Button variant="outline" size="lg" className="px-8 py-3">
                  Discover Our Story →
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={happyBaby} 
                  alt="Happy baby" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Sections */}
      <motion.section 
        className="py-20 px-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For Parents */}
            <motion.div
              className="text-center p-8 rounded-2xl bg-background/80 backdrop-blur-sm shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Baby className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">For Parents</h3>
              <p className="text-muted-foreground mb-6">
                Find the perfect daycare for your child. Browse verified centers, read reviews, and book visits easily.
              </p>
              <Button size="lg" className="w-full">
                Find Daycare
              </Button>
            </motion.div>

            {/* For Daycare Owners */}
            <motion.div
              className="text-center p-8 rounded-2xl bg-background/80 backdrop-blur-sm shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Users className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">For Daycare Owners</h3>
              <p className="text-muted-foreground mb-6">
                List your daycare on our platform. Reach more families and grow your business with our trusted network.
              </p>
              <Button size="lg" variant="outline" className="w-full">
                Register Your Daycare
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <motion.section 
        className="py-20 px-4 bg-accent/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Star className="h-8 w-8 text-yellow-500 fill-current" />
                </motion.div>
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              "The most caring and professional team. My baby loves going there!"
            </blockquote>
            <cite className="text-lg text-muted-foreground">- Sarah Johnson, Happy Mom</cite>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join Our Family?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the difference at Mamas Baby Lounge. Schedule a visit today and see why families choose us.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="px-12 py-6 text-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule a Visit
            </Button>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Index;
