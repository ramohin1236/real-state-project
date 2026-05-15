import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PaymentModal } from './PaymentModal';
export function Booking() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [bookingData, setBookingData] = useState<any>(null);
  const timeSlots = ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'];
  // Simple mock calendar generation for current month
  const today = new Date();
  const currentMonth = today.toLocaleString('default', {
    month: 'long'
  });
  const currentYear = today.getFullYear();
  const daysInMonth = new Date(currentYear, today.getMonth() + 1, 0).getDate();
  const firstDay = new Date(currentYear, today.getMonth(), 1).getDay();
  const days = Array.from(
    {
      length: daysInMonth
    },
    (_, i) => i + 1
  );
  const blanks = Array.from(
    {
      length: firstDay
    },
    (_, i) => i
  );
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time first.');
      return;
    }
    const formData = new FormData(e.currentTarget);
    setBookingData({
      date: `${currentMonth} ${selectedDate}, ${currentYear}`,
      time: selectedTime,
      service: formData.get('service'),
      name: formData.get('name'),
      email: formData.get('email')
    });
    setIsPaymentOpen(true);
  };
  const handleSuccess = () => {
    setSelectedDate(null);
    setSelectedTime(null);
    const form = document.getElementById('booking-form') as HTMLFormElement;
    if (form) form.reset();
  };
  return (
    <section id="book" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="w-8 h-[1px] bg-gold"></span>
              <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">
                Schedule
              </span>
              <span className="w-8 h-[1px] bg-gold"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-navy mb-6">
              Book a Consultation
            </h2>
            <p className="text-slate font-light">
              Begin your journey with Atelier Estate. Select a preferred time
              for an initial consultation with our lead architects and
              designers.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Calendar & Time Slots */}
          <ScrollReveal direction="right">
            <div className="bg-ivory p-8 md:p-10 border border-slate/10">
              {/* Calendar Header */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-display text-2xl text-navy">
                  {currentMonth} {currentYear}
                </h3>
                <div className="flex space-x-2">
                  <button className="p-2 text-slate hover:text-navy transition-colors">
                    <ChevronLeft size={20} />
                  </button>
                  <button className="p-2 text-slate hover:text-navy transition-colors">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              {/* Days Grid */}
              <div className="grid grid-cols-7 gap-2 mb-8">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) =>
                <div
                  key={day}
                  className="text-center text-xs uppercase tracking-widest text-slate/60 py-2">
                  
                    {day}
                  </div>
                )}
                {blanks.map((b) =>
                <div key={`blank-${b}`} />
                )}
                {days.map((day) => {
                  const isPast = day < today.getDate();
                  const isSunday =
                  new Date(currentYear, today.getMonth(), day).getDay() === 0;
                  const isDisabled = isPast || isSunday;
                  const isSelected = selectedDate === day;
                  return (
                    <button
                      key={day}
                      disabled={isDisabled}
                      onClick={() => setSelectedDate(day)}
                      className={`aspect-square flex items-center justify-center text-sm transition-all duration-300 ${isDisabled ? 'text-slate/30 cursor-not-allowed' : isSelected ? 'bg-navy text-white font-medium' : 'text-navy hover:bg-gold/20'}`}>
                      
                      {day}
                    </button>);

                })}
              </div>

              {/* Time Slots */}
              {selectedDate &&
              <div className="animate-in fade-in slide-in-from-top-4 duration-500">
                  <h4 className="text-xs uppercase tracking-widest text-slate mb-4">
                    Available Times
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {timeSlots.map((time) =>
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-3 text-sm transition-all duration-300 border ${selectedTime === time ? 'border-navy bg-navy text-white' : 'border-slate/20 text-navy hover:border-gold hover:text-gold bg-white'}`}>
                    
                        {time}
                      </button>
                  )}
                  </div>
                </div>
              }
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal direction="left" delay={0.2}>
            <form
              id="booking-form"
              onSubmit={handleFormSubmit}
              className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-slate mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-ivory border border-slate/10 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" />
                  
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-slate mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-ivory border border-slate/10 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" />
                  
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-slate mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 bg-ivory border border-slate/10 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" />
                  
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-slate mb-2">
                    Service Type
                  </label>
                  <select
                    name="service"
                    required
                    className="w-full px-4 py-3 bg-ivory border border-slate/10 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all appearance-none">
                    
                    <option value="">Select a service...</option>
                    <option value="Development">Real Estate Development</option>
                    <option value="Interior">Interior Design</option>
                    <option value="Restoration">Restoration</option>
                    <option value="Consultation">General Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-slate mb-2">
                  Project Address / Location
                </label>
                <input
                  type="text"
                  name="address"
                  className="w-full px-4 py-3 bg-ivory border border-slate/10 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all" />
                
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-slate mb-2">
                  Project Details
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-ivory border border-slate/10 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none">
                </textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-navy text-white py-4 text-sm uppercase tracking-widest hover:bg-gold hover:text-navy transition-colors duration-300">
                
                Proceed to Payment ($250)
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>

      <PaymentModal
        isOpen={isPaymentOpen}
        onClose={() => setIsPaymentOpen(false)}
        bookingDetails={bookingData}
        onSuccess={handleSuccess} />
      
    </section>);

}