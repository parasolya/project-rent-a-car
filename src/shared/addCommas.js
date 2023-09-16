export default function addCommas(number) {
    // Перетворюємо число в рядок
    let str = number.toString();
  
    // Розділяємо рядок на частини перед і після десяткової коми (якщо є)
    const parts = str.split(".");
    const integerPart = parts[0];
    const decimalPart = parts[1] || "";
  
    // Додаємо коми до цілої частини числа
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
    // Повертаємо результат, додавши десяткову частину (якщо є)
    return decimalPart ? `${formattedIntegerPart}.${decimalPart}` : formattedIntegerPart;
  }