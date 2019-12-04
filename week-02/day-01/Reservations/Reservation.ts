interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy {
  getCodeBooking() {
    let code = [];
    for (let i = 0; i < 8; i++) {
      code[i] = String.fromCharCode(Math.floor((Math.random()) * 26) + 65);
    }
    return code.join('');
  }

  getDowBooking() {
    const DOWArray = ['MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT', 'SUN'];
    return DOWArray[Math.floor((Math.random()) * 6)];
  }
}

const booking = new Reservation();
console.log(`Booking# ${booking.getCodeBooking()} for ${booking.getDowBooking()}`);
console.log(`Booking# ${booking.getCodeBooking()} for ${booking.getDowBooking()}`);
console.log(`Booking# ${booking.getCodeBooking()} for ${booking.getDowBooking()}`);
console.log(`Booking# ${booking.getCodeBooking()} for ${booking.getDowBooking()}`);
console.log(`Booking# ${booking.getCodeBooking()} for ${booking.getDowBooking()}`);
console.log(`Booking# ${booking.getCodeBooking()} for ${booking.getDowBooking()}`);
console.log(`Booking# ${booking.getCodeBooking()} for ${booking.getDowBooking()}`);