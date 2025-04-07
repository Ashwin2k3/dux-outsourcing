import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  useTheme,
  Avatar,
  Chip,
  Stack,
  Paper,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Business,
  People,
  TrendingUp,
  Security,
  Support,
  Timeline,
  EmojiEvents,
  Speed,
  Handshake,
  Dashboard,
  Assessment,
  Analytics,
  Storage,
  Cloud,
  Security as SecurityIcon,
} from '@mui/icons-material';

const About = () => {
  const theme = useTheme();

  const values = [
    {
      icon: <Security fontSize="large" />,
      title: 'Data Security',
      description: 'We implement enterprise-grade security measures to protect your sensitive business data.',
      color: theme.palette.primary.main,
    },
    {
      icon: <Support fontSize="large" />,
      title: '24/7 Support',
      description: 'Round-the-clock support team to address your queries and concerns.',
      color: theme.palette.secondary.main,
    },
    {
      icon: <Timeline fontSize="large" />,
      title: 'Scalable Solutions',
      description: 'Flexible services that grow with your business needs.',
      color: theme.palette.success.main,
    },
  ];

  const team = [
    {
      name: 'Manish Gupta',
      role: 'Promoter & Director',
      image: '/team/manish.jpg',
      description: 'Manish is a Chartered Accountant with +23 years of work experience in finance domain. He has worked in many Indian and Multinational pioneered companies in IT and Telecom sector, to name few, he has worked in Infosys, Steria, British Telecom, Hewlett Packard. He has performed global roles in finance and handled ~$50m to ~$1.3b P&L size during his tenure. He is an expert in business planning, financial controls, commercial management, change management, operation finance, pricing, project management, accounting, management reporting, delivery cost reduction, and P&L management.',
      expertise: ['Business Planning', 'Financial Controls', 'Commercial Management', 'P&L Management'],
    },
    {
      name: 'Neeru Gupta',
      role: 'Promoter & Director',
      image: '/team/neeru.jpg',
      description: 'Neeru is a finance professional with an excellent academic record and a rank holder in Chartered Accountancy exam. She possesses +23 years of work experience in finance including regulatory compliances. She has worked for many reputed Indian companies in logistics, food processing, real estate, and packaging industries. She is an expert in statutory audits, internal audit, tax audit, company law compliances, tax assessment cases, financial capital restructuring, short term or long term financial arrangement from banks, audit of cooperative societies.',
      expertise: ['Statutory Audits', 'Tax Compliance', 'Financial Restructuring', 'Regulatory Affairs'],
    },
    {
      name: 'Laxman Singh Mehra',
      role: 'Australia Business Advisor',
      image: '/team/laxman.jpg',
      description: 'Laxman is our esteemed Australia Business Advisor based in Adelaide. With extensive experience in the Australian market, he provides strategic guidance and local expertise to help businesses navigate the Australian business landscape. His deep understanding of Australian regulations, market dynamics, and business practices makes him an invaluable asset to our team and clients.',
      expertise: ['Australian Market', 'Business Strategy', 'Regulatory Compliance', 'Market Entry'],
    }
  ];

  const stats = [
    { number: '100+', label: 'Clients', icon: <EmojiEvents /> },
    { number: '25+', label: 'Industry Experience', icon: <Timeline /> },
    { number: '99%', label: 'Client Retention', icon: <Handshake /> },
  ];

  const softwareTools = [
    {
      category: 'Accounting Software',
      tools: [
        { name: 'Xero', description: 'Cloud-based accounting for small to medium businesses' },
        { name: 'MYOB Essential', description: 'Comprehensive accounting solution for Australian businesses' },
        { name: 'AccountRight', description: 'Advanced accounting software for growing businesses' },
        { name: 'QuickBooks', description: 'Popular accounting solution for small businesses' },
        { name: 'Tally Prime', description: 'Complete business management solution' },
      ],
      icon: <Assessment fontSize="large" />,
      color: '#2563eb'
    },
    {
      category: 'Enterprise Solutions',
      tools: [
        { name: 'NetSuite', description: 'Cloud ERP for enterprise resource planning' },
        { name: 'SAP', description: 'Enterprise-grade business management software' },
        { name: 'Zoho', description: 'Integrated suite of business applications' },
      ],
      icon: <Business fontSize="large" />,
      color: '#7c3aed'
    },
    {
      category: 'Business Intelligence',
      tools: [
        { name: 'Power BI', description: 'Interactive data visualization and analytics' },
        { name: 'Tableau', description: 'Advanced business intelligence and analytics' },
        { name: 'Qlik', description: 'End-to-end data integration and analytics' },
      ],
      icon: <Analytics fontSize="large" />,
      color: '#059669'
    },
    {
      category: 'Cloud & Security',
      tools: [
        { name: 'Microsoft Azure', description: 'Cloud computing services and solutions' },
        { name: 'AWS', description: 'Secure cloud infrastructure and services' },
        { name: 'Google Cloud', description: 'Enterprise-grade cloud platform' },
      ],
      icon: <Cloud fontSize="large" />,
      color: '#dc2626'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("/pattern.png")',
            opacity: 0.1,
          }
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto', position: 'relative' }}>
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                }}
              >
                About Dux Outsourcing
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  fontWeight: 400,
                }}
              >
                Your trusted partner in business process outsourcing
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, position: 'relative' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography 
                  variant="h4" 
                  sx={{ 
                    mb: 3,
                    fontWeight: 600,
                    color: theme.palette.primary.main,
                  }}
                >
                  Our Mission
                </Typography>
                <Typography 
                  paragraph
                  sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: theme.palette.text.secondary,
                  }}
                >
                  At Dux Outsourcing, we're dedicated to helping businesses streamline their operations through efficient outsourcing solutions. Our mission is to provide reliable, cost-effective services that enable our clients to focus on their core business objectives.
                </Typography>
                <Typography 
                  paragraph
                  sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: theme.palette.text.secondary,
                  }}
                >
                  We believe in building long-term partnerships with our clients, understanding their unique needs, and delivering customized solutions that drive growth and efficiency.
                </Typography>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
                  }}
                >
                  <Box
                    component="img"
                    src="/about/mission.jpg"
                    alt="Our Mission"
                    sx={{
                      width: '100%',
                      borderRadius: 1,
                      boxShadow: 3,
                    }}
                  />
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

     

      {/* Team Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ mb: 6, textAlign: 'center' }}>
            Meet Our Board of Directors & Advisor
          </Typography>
          <Grid container spacing={4}>
            {team.map((member, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      p: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6,
                      },
                      background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
                    }}
                  >
                    <Avatar
                      src={member.image}
                      sx={{
                        width: 150,
                        height: 150,
                        mb: 3,
                        border: `4px solid ${theme.palette.primary.main}`,
                        boxShadow: 3,
                      }}
                    />
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        mb: 1,
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      color="primary"
                      sx={{ 
                        mb: 2, 
                        fontWeight: 500,
                        fontSize: '1.1rem',
                      }}
                    >
                      {member.role}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 3,
                        color: theme.palette.text.secondary,
                        lineHeight: 1.8,
                        textAlign: 'left',
                      }}
                    >
                      {member.description}
                    </Typography>
                    <Stack 
                      direction="row" 
                      spacing={1} 
                      flexWrap="wrap" 
                      useFlexGap
                      sx={{ 
                        width: '100%',
                        justifyContent: 'center',
                      }}
                    >
                      {member.expertise.map((skill, i) => (
                        <Chip
                          key={i}
                          label={skill}
                          size="small"
                          sx={{ 
                            mb: 1,
                            bgcolor: `${theme.palette.primary.main}15`,
                            color: theme.palette.primary.main,
                            '&:hover': {
                              bgcolor: `${theme.palette.primary.main}25`,
                            }
                          }}
                        />
                      ))}
                    </Stack>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
       {/* Values Section */}
       <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 6, 
              textAlign: 'center',
              fontWeight: 600,
              color: theme.palette.primary.main,
            }}
          >
            Our Core Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      p: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        color: value.color,
                        mb: 2,
                        p: 2,
                        borderRadius: '50%',
                        bgcolor: `${value.color}15`,
                      }}
                    >
                      {value.icon}
                    </Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        mb: 1,
                        fontWeight: 600,
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography 
                      color="text.secondary"
                      sx={{
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                      }}
                    >
                      {value.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Software Tools Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 6, 
              textAlign: 'center',
              fontWeight: 600,
              color: theme.palette.primary.main,
            }}
          >
            Our Technology Stack
          </Typography>
          <Grid container spacing={4}>
            {softwareTools.map((category, index) => (
              <Grid item xs={12} md={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      p: 3,
                      borderRadius: 2,
                      background: `linear-gradient(135deg, ${category.color}15 0%, ${theme.palette.background.paper} 100%)`,
                      border: `1px solid ${category.color}30`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 3,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 3,
                      }}
                    >
                      <Box
                        sx={{
                          color: category.color,
                          mr: 2,
                          p: 1.5,
                          borderRadius: '50%',
                          bgcolor: `${category.color}15`,
                        }}
                      >
                        {category.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          color: category.color,
                        }}
                      >
                        {category.category}
                      </Typography>
                    </Box>
                    <Box component="ul" sx={{ pl: 0 }}>
                      {category.tools.map((tool, toolIndex) => (
                        <Box
                          key={toolIndex}
                          component="li"
                          sx={{
                            listStyle: 'none',
                            mb: 2,
                            p: 2,
                            borderRadius: 1,
                            bgcolor: 'background.paper',
                            border: '1px solid',
                            borderColor: 'divider',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                              bgcolor: `${category.color}10`,
                              borderColor: category.color,
                            },
                          }}
                        >
                          <Typography
                            variant="subtitle1"
                            sx={{
                              fontWeight: 600,
                              mb: 0.5,
                              color: category.color,
                            }}
                          >
                            {tool.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                          >
                            {tool.description}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: 'white',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Box 
                    sx={{ 
                      textAlign: 'center',
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        color: 'white',
                        mb: 3,
                        p: 2,
                        borderRadius: '50%',
                        bgcolor: 'rgba(255,255,255,0.1)',
                        display: 'inline-flex',
                        width: 80,
                        height: 80,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                        fontSize: { xs: '2.5rem', md: '3rem' },
                      }}
                    >
                      {stat.number}
                    </Typography>
                    <Typography 
                      variant="h6"
                      sx={{
                        opacity: 0.9,
                        fontWeight: 400,
                        fontSize: { xs: '1rem', md: '1.1rem' },
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper
              elevation={3}
              sx={{
                textAlign: 'center',
                p: 4,
                borderRadius: 2,
                background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
              }}
            >
              <Typography 
                variant="h4" 
                sx={{ 
                  mb: 3,
                  fontWeight: 600,
                  color: theme.palette.primary.main,
                }}
              >
                Ready to Transform Your Business?
              </Typography>
              <Typography 
                paragraph 
                sx={{ 
                  mb: 4,
                  fontSize: '1.1rem',
                  color: theme.palette.text.secondary,
                }}
              >
                Let's discuss how our outsourcing solutions can help your business grow and succeed.
              </Typography>
              <Box
                component="a"
                href="/contact"
                sx={{
                  display: 'inline-block',
                  px: 4,
                  py: 2,
                  bgcolor: 'primary.main',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '50px',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'primary.dark',
                    transform: 'translateY(-2px)',
                    boxShadow: 3,
                  },
                }}
              >
                Get Started
              </Box>
            </Paper>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default About; 