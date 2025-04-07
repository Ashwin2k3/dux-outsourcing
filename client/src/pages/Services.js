import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  CardHeader,
  useTheme,
  useMediaQuery,
  Divider,
  CardActions,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PaymentsIcon from '@mui/icons-material/Payments';
import CalculateIcon from '@mui/icons-material/Calculate';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { useNavigate } from 'react-router-dom';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

const services = [
  {
    id: 'accounting',
    title: 'Accounting Solutions',
    icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />,
    description: 'Our expert accountants help CA firms and businesses by taking care of their end-to-end accounting requirements. Our experts\' jurisdiction extends to but is not limited to:',
    features: [
      'Transaction processing',
      'Managing receivables and payables',
      'Ledger and bank reconciliation',
      'Data preparation for payroll and BAS Returns'
    ],
    tagline: 'Streamline your financial operations with expert accounting solutions'
  },
  {
    id: 'financial-reporting',
    title: 'Financial Reporting, Planning, & Analysis',
    icon: <AnalyticsIcon sx={{ fontSize: 40 }} />,
    description: 'Comprehensive financial reporting and analysis services to help businesses make informed decisions and achieve their financial goals.',
    features: [
      'Financial Reporting',
      'Planning & Budgeting',
      'Analysis & Forecasting',
      'Financial Modeling'
    ],
    tagline: 'Transform data into actionable business insights'
  },
  {
    id: 'bas',
    title: 'BAS Returns',
    icon: <ReceiptIcon sx={{ fontSize: 40 }} />,
    description: 'We have hands-on experience in preparing Business Activity Statements (BAS) and also assist businesses in managing their statutory compliances:',
    features: [
      'GST management',
      'PayG processing',
      'PayG withholding',
      'Other tax compliances'
    ],
    tagline: 'Ensure compliance with Australian tax regulations'
  },
  {
    id: 'payroll',
    title: 'Payroll Compliances',
    icon: <PaymentsIcon sx={{ fontSize: 40 }} />,
    description: 'Our Payroll professionals assist our clients in having a smooth payroll run whether weekly, fortnightly or monthly:',
    features: [
      'Employee setup and management',
      'Leave tracking',
      'Superannuation processing',
      'Single Touch Payroll Compliance'
    ],
    tagline: 'Simplify your payroll management process'
  },
  {
    id: 'tax',
    title: 'Tax Returns',
    icon: <CalculateIcon sx={{ fontSize: 40 }} />,
    description: 'Our expert Tax Professionals assist you in finalizing your financial statements and preparing your income and corporate tax returns:',
    features: [
      'Financial statement finalization',
      'Income tax preparation',
      'Corporate tax returns',
      'Tax planning and optimization'
    ],
    tagline: 'Maximize your tax benefits with expert guidance'
  },
  {
    id: 'smsf',
    title: 'SMSF Compliance',
    icon: <AccountTreeIcon sx={{ fontSize: 40 }} />,
    description: 'Our SMSF or Self-Managed Super Fund service is exclusively curated for individuals looking to invest and manage their own super funds:',
    features: [
      'SMSF accounting',
      'Financial statement preparation',
      'Tax return lodgment',
      'Compliance documentation'
    ],
    tagline: 'Take control of your superannuation investments'
  },
  {
    id: 'document-automation',
    title: 'Document and Data Automation',
    icon: <AutoFixHighIcon sx={{ fontSize: 40 }} />,
    description: 'Advanced AI-powered document processing and data automation solutions to streamline your financial operations.',
    features: [
      'Invoice Data Extraction',
      'Bank Statement Processing',
      'AI-Powered Analytics',
      'Automated Form Filling'
    ],
    tagline: 'Leverage AI to automate your document processing'
  }
];

const ServiceCard = ({ service }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card 
        sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: theme.shadows[8],
          },
          transition: 'all 0.3s ease',
        }}
      >
        <CardHeader
          avatar={service.icon}
          title={
            <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
              {service.title}
            </Typography>
          }
          subheader={
            <Typography variant="body2" color="primary" sx={{ mt: 1 }}>
              {service.tagline}
            </Typography>
          }
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="body1" paragraph>
            {service.description}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Box component="ul" sx={{ pl: 2 }}>
            {service.features.map((feature, index) => (
              <Typography 
                key={index} 
                component="li" 
                variant="body2" 
                sx={{ mb: 1 }}
              >
                {feature}
              </Typography>
            ))}
          </Box>
        </CardContent>
        <CardActions sx={{ p: 2, pt: 0 }}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => navigate(`/services/${service.id}`)}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
};

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              fontWeight: 700,
              mb: 2,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Our Services
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary" 
            sx={{ maxWidth: 800, mx: 'auto' }}
          >
            Comprehensive accounting and tax services tailored to meet your business needs
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item xs={12} md={6} lg={4} key={service.id}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Ready to Get Started?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Contact us today to discuss how we can help streamline your accounting processes
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Services; 