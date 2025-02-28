import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummary';
import Payment from './payment';

const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment'];

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const querysearch = new URLSearchParams(location.search);
    const step = querysearch.get("step");
    const orderId = querysearch.get("order_id");
    const parsedStep = step ? parseInt(step, 10) : 0;

    const [activeStep, setActiveStep] = React.useState(parsedStep);

    // Sync activeStep with URL whenever it changes
    React.useEffect(() => {
        // Include order_id in the URL if it exists
        navigate(`?step=${activeStep}${orderId ? `&order_id=${orderId}` : ''}`, { replace: true });
    }, [activeStep, orderId, navigate]);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const renderStepContent = (step) => {
        switch (step) {
            case 0:
                return <div>Login</div>;
            case 1:
                return <DeliveryAddressForm handleNext={handleNext} />;
            case 2:
                return <OrderSummary orderId={orderId} />; // Pass orderId if needed
            case 3:
                return <Payment/> ;
            default:
                return <div>Invalid</div>;
        }
    };

    return (
        <div className='px-10 lg:px-20'>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                        <hr />
                        <div>
                            {renderStepContent(activeStep)}
                        </div>
                    </React.Fragment>
                )}
            </Box>
        </div>
    );
};

export default Checkout;