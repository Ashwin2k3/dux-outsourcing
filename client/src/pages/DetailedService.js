import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    id: 'accounting',
    title: 'Accounting Solutions',
    description: 'Our expert accountants help CA firms and businesses by taking care of their end-to-end accounting requirements. Our experts\' jurisdiction extends to but is not limited to:',
    features: [
      'Transaction processing',
      'Managing receivables and payables',
      'Ledger and bank reconciliation',
      'Data preparation for payroll and BAS Returns'
    ],
    tagline: 'Streamline your financial operations with expert accounting solutions',
    detailedDescription: 'Our comprehensive accounting solutions are designed to streamline your financial operations. We provide end-to-end accounting services that help you maintain accurate financial records and make informed business decisions. Our team of experienced accountants ensures that your financial data is always up-to-date and compliant with the latest regulations.',
    benefits: [
      'Improved financial accuracy',
      'Reduced operational costs',
      'Better financial decision making',
      'Compliance with accounting standards'
    ],
    detailedServices: [
      {
        title: 'Chart of Accounts',
        description: 'Setting Up Industry Specific chart of accounts; cost center hierarchy',
        icon: '📋'
      },
      {
        title: 'Sales Accounting',
        description: 'Setting up customer profile in accounting software; Invoicing; Recording of payment received from customers',
        icon: '📊'
      },
      {
        title: 'Purchase Accounting',
        description: 'Setting up supplier profile in accounting software; Issue of PO; GR & recording of Invoices; Recording of final payment',
        icon: '🛒'
      },
      {
        title: 'Payroll Accounting',
        description: 'Setting up employee profile in relevant accounting software; Prepare pay slips; pay disbursement, Tax, Superannuation, PF, ESI',
        icon: '💰'
      },
      {
        title: 'Fixed Assets Accounting',
        description: 'Initial cost recognition in FAR; Assets tagging; Maintenance of FAR; Physical Verification and impairment analysis',
        icon: '🏢'
      },
      {
        title: 'Inventory Valuation',
        description: 'Inventory valuation on periodic basis; Identification of EOQ',
        icon: '📦'
      },
      {
        title: 'Reconciliation',
        description: 'Bank; Debtors; Creditors; General Ledger',
        icon: '🔍'
      }
    ]
  },
  {
    id: 'bas',
    title: 'BAS Returns',
    description: 'We have hands-on experience in preparing Business Activity Statements (BAS) and also assist businesses in managing their statutory compliances:',
    features: [
      'GST management',
      'PayG processing',
      'PayG withholding',
      'Other tax compliances'
    ],
    tagline: 'Ensure timely and accurate BAS lodgment',
    detailedDescription: 'Our BAS return services ensure that your business meets all its tax obligations on time. We handle everything from GST calculations to PAYG processing, making sure your business stays compliant with ATO requirements.',
    benefits: [
      'Timely BAS lodgment',
      'Accurate tax calculations',
      'Reduced compliance risk',
      'Expert guidance on tax matters'
    ]
  },
  {
    id: 'payroll',
    title: 'Payroll Compliances',
    description: 'Our Payroll professionals assist our clients in having a smooth payroll run whether weekly, fortnightly or monthly:',
    features: [
      'Employee setup and management',
      'Leave tracking',
      'Superannuation processing',
      'Single Touch Payroll Compliance'
    ],
    tagline: 'Ensure accurate and compliant payroll processing',
    detailedDescription: 'Our payroll services ensure that your employees are paid accurately and on time, while maintaining full compliance with Australian payroll regulations. We handle everything from employee onboarding to final payments.',
    benefits: [
      'Accurate payroll processing',
      'Compliance with employment laws',
      'Efficient leave management',
      'Automated superannuation processing'
    ]
  },
  {
    id: 'tax',
    title: 'Tax Returns',
    description: 'Our expert Tax Professionals assist you in finalizing your financial statements and preparing your income and corporate tax returns:',
    features: [
      'Financial statement finalization',
      'Income tax preparation',
      'Corporate tax returns',
      'Tax planning and optimization'
    ],
    tagline: 'Maximize tax benefits while ensuring full compliance',
    detailedDescription: 'Our tax return services help you maximize your tax benefits while ensuring full compliance with ATO requirements. We provide comprehensive tax planning and preparation services for both individuals and businesses.',
    benefits: [
      'Maximized tax benefits',
      'Compliance with tax laws',
      'Strategic tax planning',
      'Expert tax advice'
    ]
  },
  {
    id: 'smsf',
    title: 'SMSF Compliance',
    description: 'Our SMSF or Self-Managed Super Fund service is exclusively curated for individuals looking to invest and manage their own super funds:',
    features: [
      'SMSF accounting',
      'Financial statement preparation',
      'Tax return lodgment',
      'Compliance documentation'
    ],
    tagline: 'Manage your self-managed super fund efficiently',
    detailedDescription: 'Our SMSF compliance services help you manage your self-managed super fund efficiently while ensuring full compliance with regulatory requirements. We provide comprehensive support for all aspects of SMSF management.',
    benefits: [
      'Regulatory compliance',
      'Efficient fund management',
      'Expert investment advice',
      'Comprehensive reporting'
    ]
  },
  {
    id: 'financial-reporting',
    title: 'Financial Reporting, Planning, & Analysis',
    description: 'Comprehensive financial reporting and analysis services to help businesses make informed decisions and achieve their financial goals.',
    features: [
      'Financial Reporting',
      'Planning & Budgeting',
      'Analysis & Forecasting',
      'Financial Modeling'
    ],
    tagline: 'Gain valuable insights for informed decision-making',
    detailedDescription: 'Our Financial Reporting, Planning, and Analysis services provide businesses with the insights they need to make informed decisions and achieve their financial objectives. We offer comprehensive analysis and reporting solutions tailored to your specific needs.',
    benefits: [
      'Improved financial decision making',
      'Better resource allocation',
      'Enhanced forecasting accuracy',
      'Strategic business planning'
    ],
    detailedServices: [
      {
        title: 'Financial Reporting',
        description: 'Monthly reporting of Profit and Loss account with key drivers; compare actual performance with past performance. Monthly reporting of key balance sheet items including working capital and free cash flow information.',
        icon: '📈'
      },
      {
        title: 'Score Card Analysis',
        description: 'Industry specific score card containing key matrices and month over month performance against these key matrices.',
        icon: '📊'
      },
      {
        title: 'Ageing Analysis',
        description: 'Monthly schedules containing age wise balance of debtors and creditors along with highlight on key contributors.',
        icon: '📅'
      },
      {
        title: 'Forecasting',
        description: 'Periodic forecast process; reporting of financial outlook of the business for rest of the period in a year.',
        icon: '🔮'
      },
      {
        title: 'Budgeting',
        description: 'Guide in setting up the financial target of the business unit / function in your organization.',
        icon: '💰'
      },
      {
        title: 'Sales Pipeline Analysis',
        description: 'Provide independent view of your sales pipeline reported by your sales force.',
        icon: '📈'
      },
      {
        title: 'Financial Modeling',
        description: 'Design financial models for revenue forecasting, product pricing, DCF (Discounted Cash Flow) analysis.',
        icon: '��'
      }
    ]
  },
  {
    id: 'document-automation',
    title: 'Document and Data Automation',
    description: 'Advanced AI-powered document processing and data automation solutions to streamline your financial operations.',
    features: [
      'Invoice Data Extraction',
      'Bank Statement Processing',
      'AI-Powered Analytics',
      'Automated Form Filling'
    ],
    tagline: 'Leverage AI to automate your document processing',
    detailedDescription: 'Our Document and Data Automation services leverage cutting-edge AI and machine learning technologies to transform your document processing workflows. We help businesses automate repetitive tasks, extract valuable insights, and improve operational efficiency.',
    benefits: [
      'Reduced manual data entry',
      'Improved accuracy and consistency',
      'Faster processing times',
      'Enhanced data insights'
    ],
    detailedServices: [
      {
        title: 'Invoice Data Extraction',
        description: 'Automatically extract invoice numbers, dates, vendors, line items, and tax info from PDFs/emails using OCR + NLP. Tools: Tesseract, AWS Textract, Google Document AI, LayoutLM.',
        icon: '📄'
      },
      {
        title: 'Bank Statement Processing',
        description: 'Extract and classify transactions, categorize expenses, match with invoices and ledgers. Ideal for reconciliation, bookkeeping, or generating cash flow reports.',
        icon: '🏦'
      },
      {
        title: 'Cash Flow Forecasting',
        description: 'Time-series ML models to predict short-term and long-term cash flows for clients.',
        icon: '📊'
      },
      {
        title: 'Financial Anomaly Detection',
        description: 'Detect outliers in transactional data: duplicate payments, abnormal entries, or fraud indicators.',
        icon: '🔍'
      },
      {
        title: 'Client Health Dashboard',
        description: 'AI generates dynamic dashboards showing liquidity ratios, working capital, profitability, etc., with natural language summaries.',
        icon: '📈'
      },
      {
        title: 'Automated Form Filling',
        description: 'Auto-populate forms like tax submissions, loan applications, or KYC using extracted client data.',
        icon: '📝'
      },
      {
        title: 'Intelligent Document Classification',
        description: 'AI model to auto-sort incoming documents like payslips, contracts, invoices, receipts, etc.',
        icon: '🗂️'
      }
    ]
  }
];

const DetailedService = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <Container>
        <Typography variant="h4">Service not found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate('/services')}
        sx={{ mb: 4 }}
      >
        Back to Services
      </Button>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Card sx={{ mb: 4 }}>
            <CardContent>
              <Typography variant="h3" component="h1" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="h6" color="primary" gutterBottom>
                {service.tagline}
              </Typography>
              <Typography variant="body1" paragraph>
                {service.detailedDescription}
              </Typography>
            </CardContent>
          </Card>

          {service.detailedServices && (
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Detailed Services
                </Typography>
                <Grid container spacing={2}>
                  {service.detailedServices.map((item, index) => (
                    <Grid item xs={12} key={index}>
                      <Card variant="outlined">
                        <CardContent>
                          <Box display="flex" alignItems="center" mb={1}>
                            <Typography variant="h4" mr={2}>
                              {item.icon}
                            </Typography>
                            <Typography variant="h6" component="h3">
                              {item.title}
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary">
                            {item.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Key Benefits
              </Typography>
              <List>
                {service.benefits.map((benefit, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={benefit} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Service Features
              </Typography>
              <List>
                {service.features.map((feature, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>
              <Divider sx={{ my: 2 }} />
              <Button
                variant="contained"
                fullWidth
                size="large"
                onClick={() => navigate('/contact')}
              >
                Get Started
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetailedService; 