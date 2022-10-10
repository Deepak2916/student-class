let count=0
class student{
     //  count=0
     constructor(name,age,phNo,marks){
          this.name=name
          this.age=age
          this.phNo=phNo
          this.marks=marks
          count+=1
     }
     iseligible(){
          if(this.marks>40){
               console.log("he is eligible")
          }
          else{
               console.log("he is not eligible")
          }
     }
     noOfStudents(){
          console.log(count)

     }
}
let std1=new student('a','6','123..',41)
let std2=new student('b','8','234..',32)
let std3=new student('c','6','456..',45)
let std4=new student('d','6','789..',20)
let std5=new student('e','7','987..',50)
std2.noOfStudents()