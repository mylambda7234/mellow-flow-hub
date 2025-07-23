import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Baby, Users, Shield, Star, ArrowRight } from "lucide-react";

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

  const services = [
    {
      icon: <Baby className="h-8 w-8" />,
      title: "Baby Care",
      description: "Professional childcare services with loving attention to every detail"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Nurturing Environment",
      description: "A warm, safe space designed specifically for your little ones"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description: "Connect with other parents and build lasting friendships"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safety First",
      description: "Fully licensed and insured with the highest safety standards"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
      {/* Hero Section */}
      <motion.section 
        className="min-h-screen flex items-center justify-center px-4"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeInUp}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent-foreground to-primary bg-clip-text text-transparent mb-6">
              Mamas Baby Lounge
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Where love meets care. A nurturing space for your precious little ones to grow, play, and thrive.
            </p>
          </motion.div>
          
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="group hover:scale-105 transition-all duration-300 px-8 py-6 text-lg shadow-lg hover:shadow-xl"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="hover:scale-105 transition-all duration-300 px-8 py-6 text-lg border-2 hover:bg-accent/50"
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive care and support for both babies and parents in our loving community
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <motion.div 
                      className="mx-auto mb-4 p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
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
