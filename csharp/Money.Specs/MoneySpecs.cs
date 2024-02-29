namespace Money.Specs;

[TestFixture]
public class MoneySpecs
{
    [TestFixture]
    public class WhenMultiplying 
    {
        [Test]
        public void Should_ReturnMultipliedAmountOfDollars_WhenMultiplyingAnAmountOfDollarsByANumber()
        {
            var fiveDollars = new Dollar(5);
            fiveDollars.Times(2);
            Assert.That(fiveDollars.amount, Is.EqualTo(10));
        }
    } 
}