// # importiamo la funzione reactive da vue
// # che serve a rendere reattivi gli oggetti
import { reactive } from "vue";

// # mettiamo lo store in una costante che esporteremo dove ci serve
// # e invochiamo appunto il metdo che renderà reattivo l'oggetto
export const store = reactive({
  movies: [],
  series: [],
});
