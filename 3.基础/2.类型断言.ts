/**
 * 类型断言(type assertion) 用来手动指定一个值的类型
 * 
 * <类型>值  或  值 as 类型 
 */

{
    function getLength(something: string | number): number {
        // 我们需要判断当something.length存在时，返回他，这时候直接使用something会报错，可以使用断言来告诉编译器something是string,这里指定something和something的实际具体类型没有关系，只是告诉编辑器把他当做这种类型来处理.另外断言类型必须是联合类型中存在的类型
        if ((<string>something).length) {
            return (<string>something).length;
        } else {
            return something.toString().length;
        }
    }
}