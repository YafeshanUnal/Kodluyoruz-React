import logo from './logo.svg';
import './App.css';

// !! Uygulama, Context API kullanılarak geliştirilmelidir.
// !! Hava raporunda görüntülenen veriler tamamen gerçeği yansıtmalıdır. 
// ?? Hava durum bilgilerine erişmek için OpenWeather API kullanılabilir. Veya dilediğiniz farklı bir API'ı da kullanabilirsiniz.
// ?? Hava raporu, içinde bulunduğumuz günden başlayarak önümüzdeki bir haftalık süreci yansıtacaktır. 
// ** Sayfa ilk açıldığında varsayılan olarak dilediğiniz herhangi şehrin hava durumunu gösterebilirsiniz. 
// !! Bu noktada yapmak isteyenler için kullanıcıdan konum erişim izni istenerek bulunduğu şehrin bilgileri varsayılan olarak gösterilebilir.
// ?? Yine yukarıdaki görselde görüleceği üzere, içinde bulunduğumuz gün, bir background ve border ile belirginleştirilmelidir.
// Günlerin listelendiği kartlarda; gün adı, hava durumu görseli(güneşli, yağmurlu, karlı, parçalı bulutlu), en yüksek ve en düşük sıcaklık gösterilmelidir.
// Bir dropdown aracılığı ile farklı bir şehrin hava raporuna ulaşılabilmelidir.

import Weather from './components/Weather';
function App() {

  
  return (
    <div className="App">
      <Weather />

    </div>
  );  
}

export default App;
