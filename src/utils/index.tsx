// Import zodiac images
import ariesImage from "../assets/cards/zodiac/aries.png";
import taurusImage from "../assets/cards/zodiac/taurus.png";
import geminiImage from "../assets/cards/zodiac/genimi.png";
import cancerImage from "../assets/cards/zodiac/cancer.png";
import leoImage from "../assets/cards/zodiac/leo.png";
import virgoImage from "../assets/cards/zodiac/virgo.png";
import libraImage from "../assets/cards/zodiac/libra.png";
import scorpioImage from "../assets/cards/zodiac/scorpio.png";
import sagittariusImage from "../assets/cards/zodiac/sagittarius.png";
import capricornImage from "../assets/cards/zodiac/capricorn.png";
import aquariusImage from "../assets/cards/zodiac/aquarius.png";
import piscesImage from "../assets/cards/zodiac/pisces.png";

export function getCardZodiacFromDate(date: string) {
  // Convert timestamp to Date object
  const birthDate = new Date(Number(date));
  const month = birthDate.getMonth() + 1; // getMonth() returns 0-11, so add 1
  const day = birthDate.getDate();
  console.log("🚀 ~ getCardZodiacFromDate ~ month:", day, month);

  // Determine zodiac sign based on birth date
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return ariesImage; // Aries: March 21 - April 19
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return taurusImage; // Taurus: April 20 - May 20
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    return geminiImage; // Gemini: May 21 - June 20
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    return cancerImage; // Cancer: June 21 - July 22
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return leoImage; // Leo: July 23 - August 22
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return virgoImage; // Virgo: August 23 - September 22
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return libraImage; // Libra: September 23 - October 22
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return scorpioImage; // Scorpio: October 23 - November 21
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return sagittariusImage; // Sagittarius: November 22 - December 21
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return capricornImage; // Capricorn: December 22 - January 19
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return aquariusImage; // Aquarius: January 20 - February 18
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return piscesImage; // Pisces: February 19 - March 20
  }

  // Default fallback (should not reach here with valid dates)
  return ariesImage;
}

export function getZodiacNameFromDate(date: string) {
  const birthDate = new Date(Number(date));
  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate();
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
    return "Bạch Dương";
  } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
    return "Kim Ngưu";
  } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
    return "Song Tử";
  } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
    return "Cự Giải";
  } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
    return "Sư Tử";
  } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
    return "Xử Nữ";
  } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
    return "Thiên Bình";
  } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
    return "Bọ Cạp";
  } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
    return "Nhân Mã";
  } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
    return "Ma Kết";
  } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
    return "Bảo Bình";
  } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
    return "Song Ngư";
  }
}
