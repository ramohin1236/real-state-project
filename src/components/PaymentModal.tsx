import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingDetails: any;
  onSuccess: () => void;
}
export function PaymentModal({
  isOpen,
  onClose,
  bookingDetails,
  onSuccess
}: PaymentModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Mock processing delay
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      toast.success('Payment successful! Booking confirmed.');
      // Auto close after success
      setTimeout(() => {
        setIsSuccess(false);
        onSuccess();
        onClose();
      }, 3000);
    }, 2000);
  };
  if (!isOpen) return null;
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        exit={{
          opacity: 0
        }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/80 backdrop-blur-sm p-4">
        
        <motion.div
          initial={{
            scale: 0.95,
            opacity: 0
          }}
          animate={{
            scale: 1,
            opacity: 1
          }}
          exit={{
            scale: 0.95,
            opacity: 0
          }}
          className="bg-white w-full max-w-md shadow-2xl relative overflow-hidden">
          
          {!isSuccess &&
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate hover:text-navy z-10">
            
              <X size={24} />
            </button>
          }

          {isSuccess ?
          <div className="p-12 text-center flex flex-col items-center">
              <motion.div
              initial={{
                scale: 0
              }}
              animate={{
                scale: 1
              }}
              transition={{
                type: 'spring',
                bounce: 0.5
              }}>
              
                <CheckCircle size={64} className="text-green-600 mb-6" />
              </motion.div>
              <h3 className="text-2xl font-display text-navy mb-2">
                Booking Confirmed
              </h3>
              <p className="text-slate font-light mb-6">
                We'll see you on {bookingDetails?.date} at{' '}
                {bookingDetails?.time}.
              </p>
              <div className="text-sm text-slate/60">
                Confirmation #{' '}
                {Math.random().toString(36).substr(2, 9).toUpperCase()}
              </div>
            </div> :

          <div className="p-8">
              <h3 className="text-2xl font-display text-navy mb-6">
                Complete Booking
              </h3>

              <div className="bg-ivory p-4 mb-6 border border-slate/10">
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-slate">Service</span>
                  <span className="font-medium text-navy">
                    {bookingDetails?.service}
                  </span>
                </div>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-slate">Date & Time</span>
                  <span className="font-medium text-navy">
                    {bookingDetails?.date} | {bookingDetails?.time}
                  </span>
                </div>
                <div className="border-t border-slate/10 my-3 pt-3 flex justify-between font-medium">
                  <span className="text-navy">Consultation Fee</span>
                  <span className="text-gold">$250.00</span>
                </div>
              </div>

              {/* Mock Payment Form */}
              <form onSubmit={handlePayment} className="space-y-4">
                <div className="flex space-x-4 mb-6 border-b border-slate/20 pb-2">
                  <button
                  type="button"
                  className="text-navy font-medium border-b-2 border-navy pb-2 px-2">
                  
                    Card
                  </button>
                  <button
                  type="button"
                  className="text-slate hover:text-navy pb-2 px-2">
                  
                    PayPal
                  </button>
                  <button
                  type="button"
                  className="text-slate hover:text-navy pb-2 px-2">
                  
                    Bank
                  </button>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-slate mb-2">
                    Card Information
                  </label>
                  <div className="relative">
                    <CreditCard
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate/50"
                    size={20} />
                  
                    <input
                    type="text"
                    required
                    placeholder="0000 0000 0000 0000"
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                    maxLength={19} />
                  
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                    type="text"
                    required
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 bg-white border border-slate/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                    maxLength={5} />
                  
                  </div>
                  <div>
                    <input
                    type="text"
                    required
                    placeholder="CVC"
                    className="w-full px-4 py-3 bg-white border border-slate/20 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                    maxLength={4} />
                  
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-xs text-slate/60 mb-4 italic">
                    *This is a demo flow. No real payment will be processed.
                  </p>
                  <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-navy text-white py-4 text-sm uppercase tracking-widest hover:bg-charcoal transition-colors disabled:opacity-70 flex justify-center items-center">
                  
                    {isProcessing ?
                  <span className="animate-pulse">Processing...</span> :

                  'Pay $250.00'
                  }
                  </button>
                </div>
              </form>
            </div>
          }
        </motion.div>
      </motion.div>
    </AnimatePresence>);

}