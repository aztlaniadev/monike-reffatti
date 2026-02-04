import requests
import sys
from datetime import datetime
import json

class MonikReffattiAPITester:
    def __init__(self, base_url="https://elitemanicure.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/api/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    if isinstance(response_data, list):
                        print(f"   Response: List with {len(response_data)} items")
                    else:
                        print(f"   Response: {type(response_data).__name__}")
                except:
                    print(f"   Response: Non-JSON content")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    error_detail = response.json()
                    print(f"   Error: {error_detail}")
                except:
                    print(f"   Error: {response.text[:200]}")
                self.failed_tests.append({
                    'test': name,
                    'expected': expected_status,
                    'actual': response.status_code,
                    'url': url
                })

            return success, response.json() if success and response.content else {}

        except requests.exceptions.RequestException as e:
            print(f"❌ Failed - Network Error: {str(e)}")
            self.failed_tests.append({
                'test': name,
                'error': str(e),
                'url': url
            })
            return False, {}
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append({
                'test': name,
                'error': str(e),
                'url': url
            })
            return False, {}

    def test_root_endpoint(self):
        """Test API root endpoint"""
        success, response = self.run_test(
            "API Root",
            "GET",
            "",
            200
        )
        return success

    def test_get_services(self):
        """Test getting services"""
        success, response = self.run_test(
            "Get Services",
            "GET",
            "services",
            200
        )
        if success and isinstance(response, list):
            print(f"   Found {len(response)} services")
            if len(response) > 0:
                service = response[0]
                required_fields = ['id', 'name', 'description', 'price', 'duration', 'category']
                for field in required_fields:
                    if field not in service:
                        print(f"   ⚠️  Missing field: {field}")
        return success

    def test_create_service(self):
        """Test creating a service"""
        test_service = {
            "name": "Test Nail Art",
            "description": "Test service for API testing",
            "price": "R$ 100",
            "duration": "1 hora",
            "category": "Test",
            "image_url": "https://images.unsplash.com/photo-1615146038466-ea2f700c5deb?crop=entropy&cs=srgb&fm=jpg&q=85"
        }
        
        success, response = self.run_test(
            "Create Service",
            "POST",
            "services",
            200,
            data=test_service
        )
        
        if success and 'id' in response:
            print(f"   Created service with ID: {response['id']}")
            return response['id']
        return None

    def test_get_blog_posts(self):
        """Test getting blog posts"""
        success, response = self.run_test(
            "Get Blog Posts",
            "GET",
            "blog",
            200
        )
        if success and isinstance(response, list):
            print(f"   Found {len(response)} blog posts")
            if len(response) > 0:
                post = response[0]
                required_fields = ['id', 'title', 'content', 'excerpt', 'author', 'category']
                for field in required_fields:
                    if field not in post:
                        print(f"   ⚠️  Missing field: {field}")
        return success

    def test_create_blog_post(self):
        """Test creating a blog post"""
        test_post = {
            "title": "Test Blog Post",
            "content": "This is a test blog post content for API testing.",
            "excerpt": "Test excerpt for the blog post",
            "image_url": "https://images.unsplash.com/photo-1615146038466-ea2f700c5deb?crop=entropy&cs=srgb&fm=jpg&q=85",
            "category": "Test"
        }
        
        success, response = self.run_test(
            "Create Blog Post",
            "POST",
            "blog",
            200,
            data=test_post
        )
        
        if success and 'id' in response:
            print(f"   Created blog post with ID: {response['id']}")
            return response['id']
        return None

    def test_get_single_blog_post(self, post_id):
        """Test getting a single blog post"""
        if not post_id:
            print("⚠️  Skipping single blog post test - no post ID available")
            return False
            
        success, response = self.run_test(
            "Get Single Blog Post",
            "GET",
            f"blog/{post_id}",
            200
        )
        return success

    def test_create_appointment(self):
        """Test creating an appointment"""
        test_appointment = {
            "name": "Test Client",
            "email": "test@example.com",
            "phone": "41999999999",
            "service": "Nail Art Premium",
            "preferred_date": "2024-03-15",
            "preferred_time": "14:00",
            "message": "Test appointment for API testing"
        }
        
        success, response = self.run_test(
            "Create Appointment",
            "POST",
            "appointments",
            200,
            data=test_appointment
        )
        
        if success and 'id' in response:
            print(f"   Created appointment with ID: {response['id']}")
            return response['id']
        return None

    def test_get_appointments(self):
        """Test getting appointments"""
        success, response = self.run_test(
            "Get Appointments",
            "GET",
            "appointments",
            200
        )
        if success and isinstance(response, list):
            print(f"   Found {len(response)} appointments")
            if len(response) > 0:
                appointment = response[0]
                required_fields = ['id', 'name', 'email', 'phone', 'service', 'preferred_date', 'preferred_time']
                for field in required_fields:
                    if field not in appointment:
                        print(f"   ⚠️  Missing field: {field}")
        return success

def main():
    print("🚀 Starting Monik Reffatti Nails API Tests")
    print("=" * 50)
    
    tester = MonikReffattiAPITester()
    
    # Test API root
    tester.test_root_endpoint()
    
    # Test Services endpoints
    print("\n📋 TESTING SERVICES ENDPOINTS")
    tester.test_get_services()
    service_id = tester.test_create_service()
    
    # Test Blog endpoints
    print("\n📝 TESTING BLOG ENDPOINTS")
    tester.test_get_blog_posts()
    post_id = tester.test_create_blog_post()
    tester.test_get_single_blog_post(post_id)
    
    # Test Appointments endpoints
    print("\n📅 TESTING APPOINTMENTS ENDPOINTS")
    appointment_id = tester.test_create_appointment()
    tester.test_get_appointments()
    
    # Print final results
    print("\n" + "=" * 50)
    print(f"📊 FINAL RESULTS")
    print(f"Tests Run: {tester.tests_run}")
    print(f"Tests Passed: {tester.tests_passed}")
    print(f"Tests Failed: {len(tester.failed_tests)}")
    print(f"Success Rate: {(tester.tests_passed/tester.tests_run)*100:.1f}%")
    
    if tester.failed_tests:
        print(f"\n❌ FAILED TESTS:")
        for failed in tester.failed_tests:
            error_msg = failed.get('error', f"Expected {failed.get('expected')}, got {failed.get('actual')}")
            print(f"   - {failed['test']}: {error_msg}")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())