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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';

const pricingPlans = [
  {
    name: 'Full Time',
    price: 'AUD 1,800 To 3,500',
    description: 'Per Month Pricing, Perfect for businesses requiring dedicated full-time support',
    features: [
      'Full-time dedicated resource',
      '40 hours per week',
      'Comprehensive accounting services',
      'Priority support',
      'Email / Call support',
      'Monthly financial reports',
      'Financial analysis',
      'Custom reporting',
      'GST compliance',
      'Strategic planning',
      'Payroll processing',
      'Dedicated account manager',
      'Regular check-ins',
    ],
    color: 'primary.light',
    popular: false,
  },
  {
    name: 'Part Time',
    price: 'AUD 900 To 1,750',
    description: 'Per Month Pricing, Ideal for growing businesses needing part-time support',
    features: [
      'Part-time dedicated resource',
      '20 hours per week',
      'Basic accounting services',
      'Email / Call support',
      'Monthly financial reports',
      'Transaction processing',
      'Basic bookkeeping',
      'GST compliance',
      'Payroll processing',
      'Regular check-ins',
    ],
    color: 'primary.main',
    popular: true,
  },
  {
    name: 'Casual',
    price: 'AUD 12/hr To 18/hr',
    description: 'Flexible support for ad-hoc requirements',
    features: [
      'Pay-as-you-go model',
      'Flexible hours',
      'Basic accounting services',
      'Email / Call support',
      'Transaction processing',
      'Basic bookkeeping',
      'GST compliance',
      'Payroll processing',
      'On-demand support',
      'Hourly billing',
    ],
    color: 'secondary.main',
    popular: false,
  },
];

const serviceDetails = [
  {
    service: 'Accounting Solutions',
    basic: '✓',
    professional: '✓',
    enterprise: '✓',
  },
  {
    service: 'BAS Returns',
    basic: '✓',
    professional: '✓',
    enterprise: '✓',
  },
  {
    service: 'Payroll Compliances',
    basic: '✓',
    professional: '✓',
    enterprise: '✓',
  },
  {
    service: 'Tax Returns',
    basic: '✓',
    professional: '✓',
    enterprise: '✓',
  },
  {
    service: 'SMSF Compliance',
    basic: '✗',
    professional: '✓',
    enterprise: '✓',
  },
  {
    service: 'Financial Analysis',
    basic: '✗',
    professional: '✓',
    enterprise: '✓',
  },
  {
    service: 'Custom Reporting',
    basic: '✗',
    professional: '✓',
    enterprise: '✓',
  },
  {
    service: 'Strategic Planning',
    basic: '✗',
    professional: '✗',
    enterprise: '✓',
  },
  {
    service: 'API Integration',
    basic: '✗',
    professional: '✗',
    enterprise: '✓',
  },
];

const PricingCard = ({ plan }) => {
  const theme = useTheme();

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
          border: '2px solid',
          borderColor: plan.color,
          transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
          '&:hover': {
            transform: plan.popular ? 'scale(1.05) translateY(-8px)' : 'translateY(-8px)',
            boxShadow: 6,
          },
          transition: 'all 0.3s ease',
        }}
      >
        {plan.popular && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              bgcolor: 'primary.main',
              color: 'white',
              px: 2,
              py: 1,
              borderRadius: '4px',
              fontSize: '0.875rem',
              fontWeight: 600,
            }}
          >
            Most Popular
          </Box>
        )}
        <CardContent sx={{ p: 4, flexGrow: 1 }}>
          <Typography variant="h5" component="h3" sx={{ mb: 2, fontWeight: 600 }}>
            {plan.name}
          </Typography>
          <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
            {plan.price}
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 3 }}>
            {plan.description}
          </Typography>
          <Box sx={{ mb: 4 }}>
            {plan.features.map((feature, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <CheckCircleIcon sx={{ color: 'success.main', mr: 1 }} />
                <Typography>{feature}</Typography>
              </Box>
            ))}
          </Box>
          <Button
            variant={plan.popular ? "contained" : "outlined"}
            fullWidth
            component={RouterLink}
            to={`/contact?plan=${encodeURIComponent(plan.name)}`}
            sx={{
              mt: 'auto',
              py: 1.5,
              borderRadius: '50px',
              textTransform: 'none',
              fontSize: '1.1rem',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: 3,
              },
              ...(plan.popular ? {
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': {
                  bgcolor: 'primary.dark',
                }
              } : {
                borderColor: 'primary.main',
                color: 'primary.main',
                '&:hover': {
                  bgcolor: 'primary.main',
                  color: 'white',
                }
              })
            }}
          >
            {plan.name === 'Full Time' ? 'Hire Full Time Expert' : 
             plan.name === 'Part Time' ? 'Hire Part Time Expert' : 
             'Book Consultation'}
          </Button>
          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Typography 
              variant="caption" 
              color="text.secondary"
              sx={{ 
                fontSize: '0.75rem',
                display: 'block',
                mt: 1,
              }}
            >
              Terms & Conditions Apply
            </Typography>
            <Typography 
              variant="caption" 
              color="text.secondary"
              sx={{ 
                fontSize: '0.75rem',
                display: 'block',
                mt: 0.5,
              }}
            >
              {plan.name === 'Full Time' ? 'Minimum 3 months commitment; software cost Exclusive' : 
               plan.name === 'Part Time' ? 'Minimum 2 months commitment; software cost Exclusive' : 
               'Minimum 10 hours per booking; software cost Exclusive'}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Pricing = () => {
  const theme = useTheme();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
              }}
            >
              Simple, Transparent Pricing
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                opacity: 0.9,
              }}
            >
              Choose the perfect plan for your business needs. All plans include dedicated support and regular reporting.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Pricing Plans */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {pricingPlans.map((plan) => (
              <Grid item xs={12} sm={6} md={4} key={plan.name}>
                <PricingCard plan={plan} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Feature Comparison */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
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
              Feature Comparison
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: 'auto' }}
            >
              Compare our plans to find the perfect fit for your business
            </Typography>
          </Box>

          <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Service</TableCell>
                  <TableCell align="center">Basic</TableCell>
                  <TableCell align="center">Professional</TableCell>
                  <TableCell align="center">Enterprise</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {serviceDetails.map((row) => (
                  <TableRow key={row.service}>
                    <TableCell component="th" scope="row">
                      {row.service}
                    </TableCell>
                    <TableCell align="center">{row.basic}</TableCell>
                    <TableCell align="center">{row.professional}</TableCell>
                    <TableCell align="center">{row.enterprise}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
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
              Frequently Asked Questions
            </Typography>
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  How does the hourly pricing work?
                </Typography>
                <Typography color="text.secondary">
                  Our hourly pricing is based on the actual time spent on your tasks. We track time accurately and provide detailed reports of work completed.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Can I upgrade or downgrade my plan?
                </Typography>
                <Typography color="text.secondary">
                  Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades apply at the start of your next billing cycle.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  What payment methods do you accept?
                </Typography>
                <Typography color="text.secondary">
                  We accept all major cards, bank transfers, and PayPal. Enterprise clients can also set up custom payment terms.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Is there a minimum commitment?
                </Typography>
                <Typography color="text.secondary">
                  Yes, Refer to the terms and conditions for each plan.
                </Typography>
              </Box>
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
              Ready to Get Started?
            </Typography>
            <Typography
              variant="h6"
              sx={{ mb: 6, opacity: 0.9 }}
            >
              Contact us today to discuss your specific needs and get a custom quote
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
                backgroundColor: 'white',
                color: 'primary.main',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                },
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

export default Pricing; 