class BaseTest {
    nihit_ready(): void {
        console.log("[BASE] Open browser");
    }
    nihit_done(): void {
        console.log("[BASE] Close browser");
    }
}
class LoginTest extends BaseTest {

    override nihit_ready(): void {
        console.log("[LoginTest] Open browser");
        console.log("[LoginTest] Maximize");
    }
}

class APITest extends BaseTest {

    override nihit_ready(): void {
        console.log("[APITest] No Browser!");
    }
}

let test = new LoginTest();
test.nihit_ready();

let apitest = new APITest();
apitest.nihit_ready();