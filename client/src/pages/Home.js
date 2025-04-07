import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Button,
  useTheme,
  useMediaQuery,
  Paper,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PaymentsIcon from '@mui/icons-material/Payments';
import CalculateIcon from '@mui/icons-material/Calculate';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

const services = [
  {
    title: 'Accounting Solutions',
    icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />,
    description: 'End-to-end accounting services for businesses and CA firms, including transaction processing and financial management.',
    path: '/services#accounting',
    color: '#2563eb'
  },
  {
    title: 'Financial Reporting',
    icon: <AnalyticsIcon sx={{ fontSize: 40 }} />,
    description: 'Comprehensive financial reporting and analysis services to help businesses make informed decisions and achieve their financial goals.',
    path: '/services#financial-reporting',
    color: '#7c3aed'
  },
  {
    title: 'BAS Returns',
    icon: <ReceiptIcon sx={{ fontSize: 40 }} />,
    description: 'Expert handling of Business Activity Statements, GST, PayG, and other tax compliances.',
    path: '/services#bas',
    color: '#059669'
  },
  {
    title: 'Payroll Compliances',
    icon: <PaymentsIcon sx={{ fontSize: 40 }} />,
    description: 'Comprehensive payroll management solutions with Single Touch Payroll Compliance.',
    path: '/services#payroll',
    color: '#dc2626'
  },
  {
    title: 'Tax Returns',
    icon: <CalculateIcon sx={{ fontSize: 40 }} />,
    description: 'Professional tax preparation and filing services for individuals and businesses.',
    path: '/services#tax',
    color: '#9333ea'
  },
  {
    title: 'SMSF Compliance',
    icon: <AccountTreeIcon sx={{ fontSize: 40 }} />,
    description: 'Specialized Self-Managed Super Fund services with complete compliance management.',
    path: '/services#smsf',
    color: '#2563eb'
  },
  {
    title: 'Document Automation',
    icon: <AutoFixHighIcon sx={{ fontSize: 40 }} />,
    description: 'AI-powered document processing and automation solutions to streamline your business operations.',
    path: '/services#document-automation',
    color: '#7c3aed'
  }
];

const financialStats = [
  {
    value: '100+',
    label: 'Active Clients',
    icon: <VerifiedUserIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    value: '24/7',
    label: 'Support',
    icon: <SecurityIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    value: '99.9%',
    label: 'Accuracy',
    icon: <TrendingUpIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
  {
    value: '50%',
    label: 'Cost Savings',
    icon: <SpeedIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
  },
];

const softwareTools = [
  { name: 'Xero', icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />, color: '#13B5EA' },
  { name: 'MYOB', icon: <ReceiptIcon sx={{ fontSize: 40 }} />, color: '#00A0E3' },
  { name: 'QuickBooks', icon: <PaymentsIcon sx={{ fontSize: 40 }} />, color: '#2CA01C' },
  { name: 'Sage', icon: <CalculateIcon sx={{ fontSize: 40 }} />, color: '#00DC82' },
  { name: 'Reckon', icon: <AccountTreeIcon sx={{ fontSize: 40 }} />, color: '#FF6B00' },
  { name: 'Microsoft Excel', icon: <AnalyticsIcon sx={{ fontSize: 40 }} />, color: '#217346' },
  { name: 'Power BI', icon: <TrendingUpIcon sx={{ fontSize: 40 }} />, color: '#F2C811' },
  { name: 'Tableau', icon: <AutoFixHighIcon sx={{ fontSize: 40 }} />, color: '#E97627' },
  { name: 'Zoho', icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />, color: '#FF6B00' },
  { name: 'Tally', icon: <ReceiptIcon sx={{ fontSize: 40 }} />, color: '#00A0E3' },
];

const ServiceCard = ({ service }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card 
        sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: `linear-gradient(135deg, ${service.color} 0%, ${theme.palette.background.paper} 100%)`,
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            '& .service-icon': {
              transform: 'scale(1.1) rotate(5deg)',
            },
          },
        }}
      >
        <CardContent sx={{ p: 4, flexGrow: 1 }}>
          <Box 
            className="service-icon"
            sx={{ 
              mb: 3,
              color: 'white',
              transition: 'transform 0.3s ease',
            }}
          >
            {service.icon}
          </Box>
          <Typography
            variant="h5"
            component="h3"
            sx={{
              mb: 2,
              fontWeight: 600,
              color: 'white',
            }}
          >
            {service.title}
          </Typography>
          <Typography
            color="rgba(255, 255, 255, 0.9)"
            sx={{ mb: 3 }}
          >
            {service.description}
          </Typography>
          <Button
            component={RouterLink}
            to={service.path}
            variant="contained"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              color: 'white',
              fontWeight: 600,
              border: '2px solid',
              borderColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(4px)',
              textShadow: '0 1px 2px rgba(0,0,0,0.1)',
              '&:hover': {
                backgroundColor: 'white',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Learn More
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 8, md: 12 },
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: 'white',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("/financial-pattern.png")',
            opacity: 0.1,
            backgroundSize: 'cover',
          },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto', position: 'relative' }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                textShadow: '0 2px 4px rgba(0,0,0,0.1)',
              }}
            >
              Financial Excellence, Delivered
            </Typography>
            <Typography
              variant="h4"
              sx={{
                mb: 4,
                opacity: 0.9,
                fontSize: { xs: '1.25rem', md: '1.5rem' },
              }}
            >
              Your trusted partner for comprehensive financial solutions and business growth
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={RouterLink}
              to="/contact"
              sx={{
                px: 6,
                py: 2,
                borderRadius: '50px',
                textTransform: 'none',
                fontSize: '1.1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                color: 'white',
                border: '2px solid',
                borderColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(4px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                '&:hover': {
                  backgroundColor: 'white',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Get Started
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Software Tools Slider */}
      <Box sx={{ 
        py: 2,
        bgcolor: 'background.paper',
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'divider',
        overflow: 'hidden',
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={2} sx={{ 
            display: 'flex',
            flexWrap: 'nowrap',
            animation: 'scroll 30s linear infinite',
            '@keyframes scroll': {
              '0%': { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-100%)' },
            },
            '&:hover': {
              animationPlayState: 'paused',
            }
          }}>
            {softwareTools.map((tool, index) => (
              <Grid item key={index} sx={{ minWidth: 150 }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                      height: 60,
                      bgcolor: 'transparent',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                    }}
                  >
                    <Box sx={{ color: tool.color }}>
                      {tool.icon}
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {tool.name}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
            {/* Duplicate items for infinite scroll effect */}
            {softwareTools.map((tool, index) => (
              <Grid item key={`duplicate-${index}`} sx={{ minWidth: 150 }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 2,
                      height: 60,
                      bgcolor: 'transparent',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2,
                    }}
                  >
                    <Box sx={{ color: tool.color }}>
                      {tool.icon}
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {tool.name}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Financial Stats Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {financialStats.map((stat, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      borderRadius: 2,
                      bgcolor: 'background.paper',
                      border: '1px solid',
                      borderColor: 'divider',
                      '&:hover': {
                        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                        transform: 'translateY(-4px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Box sx={{ mb: 2 }}>{stat.icon}</Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Financial Services
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: 'auto' }}
            >
              Comprehensive financial solutions tailored to your business needs
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {services.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.title}>
                <ServiceCard service={service} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Trust Indicators Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Trusted by Financial Professionals
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Our team of certified professionals ensures the highest standards of financial accuracy and compliance. We're committed to delivering excellence in every aspect of financial management.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    ✓ Certified Accountants
                  </Typography>
                </Paper>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    ✓ Industry Compliance
                  </Typography>
                </Paper>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    ✓ Data Security
                  </Typography>
                </Paper>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                  Why Choose Us
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {[
                    'Expert financial analysis and reporting',
                    'Comprehensive tax planning and compliance',
                    'Advanced accounting software integration',
                    'Dedicated financial advisors',
                    'Regular performance reviews',
                    'Customized financial solutions',
                  ].map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <VerifiedUserIcon sx={{ color: 'primary.main' }} />
                      <Typography variant="body1">{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
          color: 'white',
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h2"
              sx={{ mb: 4, fontWeight: 700 }}
            >
              Ready to Optimize Your Finances?
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: 6, opacity: 0.9 }}
            >
              Let's discuss how we can help streamline your financial operations
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component={RouterLink}
              to="/contact"
              sx={{
                px: 6,
                py: 2,
                borderRadius: '50px',
                textTransform: 'none',
                fontSize: '1.1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                color: 'white',
                border: '2px solid',
                borderColor: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(4px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                textShadow: '0 1px 2px rgba(0,0,0,0.1)',
                '&:hover': {
                  backgroundColor: 'white',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 