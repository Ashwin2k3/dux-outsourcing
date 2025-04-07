import React from 'react';
import { Container, Typography, Box, Paper, Divider } from '@mui/material';

const TermsOfService = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={0} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
          Terms of Service
        </Typography>
        
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            1. Introduction
          </Typography>
          <Typography paragraph>
            Welcome to Dux Outsourcing. These Terms of Service ("Terms") govern your access to and use of our services, including our website and any related services provided by Dux Outsourcing ("we," "us," or "our"). By accessing or using our services, you agree to be bound by these Terms.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            2. Services Overview
          </Typography>
          <Typography paragraph>
            Dux Outsourcing provides comprehensive financial and business process outsourcing services, including but not limited to:
          </Typography>
          <Box component="ul" sx={{ pl: 4, mb: 3 }}>
            <li>Accounting Solutions and Financial Management</li>
            <li>Financial Reporting, Planning & Analysis</li>
            <li>Business Activity Statement (BAS) Returns</li>
            <li>Payroll Compliance and Management</li>
            <li>Tax Returns and Compliance</li>
            <li>Self-Managed Super Fund (SMSF) Compliance</li>
            <li>Document and Data Automation Services</li>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            3. Client Responsibilities
          </Typography>
          <Typography paragraph>
            As a client of our services, you agree to:
          </Typography>
          <Box component="ul" sx={{ pl: 4, mb: 3 }}>
            <li>Provide accurate, complete, and current information</li>
            <li>Maintain the confidentiality of your account credentials</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Provide necessary documentation in a timely manner</li>
            <li>Notify us of any changes in your business circumstances</li>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            4. Service Delivery
          </Typography>
          <Typography paragraph>
            We commit to:
          </Typography>
          <Box component="ul" sx={{ pl: 4, mb: 3 }}>
            <li>Deliver services with professional care and expertise</li>
            <li>Maintain confidentiality of client information</li>
            <li>Provide regular updates on service progress</li>
            <li>Address client queries in a timely manner</li>
            <li>Comply with relevant professional standards and regulations</li>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            5. Data Security and Privacy
          </Typography>
          <Typography paragraph>
            We implement industry-standard security measures to protect your data. Our privacy practices are detailed in our Privacy Policy, which forms part of these Terms.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            6. Limitation of Liability
          </Typography>
          <Typography paragraph>
            To the maximum extent permitted by law, Dux Outsourcing shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use of our services.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            7. Changes to Terms
          </Typography>
          <Typography paragraph>
            We reserve the right to modify these Terms at any time. We will provide notice of any material changes through our website or via email. Your continued use of our services after such changes constitutes your acceptance of the new Terms.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            8. Contact Information
          </Typography>
          <Typography paragraph>
            For any questions regarding these Terms of Service, please contact us at:
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography>Email: duxoutsourcing@gmail.com</Typography>
            <Typography>Phone: +91 92122 50127</Typography>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default TermsOfService; 